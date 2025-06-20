
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ResumeAnalysisRequest {
  jobId: string;
  applicantName: string;
  applicantEmail: string;
  resumeText: string;
  jobRequirements: {
    skills: string[];
    experience: string;
    description?: string;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { jobId, applicantName, applicantEmail, resumeText, jobRequirements }: ResumeAnalysisRequest = await req.json()

    // Call Hugging Face API for resume analysis
    const hfToken = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN')
    
    const analysisPrompt = `
    Analyze this resume and extract the following information in JSON format:
    
    Resume: ${resumeText}
    
    Job Requirements:
    - Required Skills: ${jobRequirements.skills.join(', ')}
    - Experience Level: ${jobRequirements.experience}
    - Job Description: ${jobRequirements.description || 'Not provided'}
    
    Please extract and return ONLY a JSON object with:
    {
      "skills_extracted": ["skill1", "skill2", "skill3"],
      "experience_years": number,
      "education_level": "string",
      "matching_skills": ["skill1", "skill2"],
      "match_score": number between 0.0 and 1.0,
      "analysis_summary": "Brief explanation of the match"
    }
    
    Focus on how well the candidate matches the job requirements.
    `

    const hfResponse = await fetch(
      `https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B`,
      {
        headers: {
          Authorization: `Bearer ${hfToken}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: analysisPrompt,
          parameters: {
            max_new_tokens: 512,
            temperature: 0.3,
            return_full_text: false
          }
        }),
      }
    )

    let analysisResult
    try {
      const hfResult = await hfResponse.json()
      const generatedText = hfResult[0]?.generated_text || hfResult.generated_text || ''
      
      // Try to extract JSON from the response
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        analysisResult = JSON.parse(jsonMatch[0])
      } else {
        // Fallback analysis if AI response is not properly formatted
        analysisResult = await fallbackAnalysis(resumeText, jobRequirements)
      }
    } catch (error) {
      console.error('Error parsing AI response:', error)
      analysisResult = await fallbackAnalysis(resumeText, jobRequirements)
    }

    // Store the application in the database
    const { data, error } = await supabase
      .from('job_applications')
      .insert({
        job_id: jobId,
        applicant_name: applicantName,
        applicant_email: applicantEmail,
        resume_text: resumeText,
        skills_extracted: analysisResult.skills_extracted || [],
        experience_years: analysisResult.experience_years || 0,
        education_level: analysisResult.education_level || 'Not specified',
        match_score: analysisResult.match_score || 0,
        analysis_result: analysisResult
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ 
      success: true, 
      application: data,
      analysis: analysisResult 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

// Fallback analysis function using simple text matching
async function fallbackAnalysis(resumeText: string, jobRequirements: any) {
  const resumeLower = resumeText.toLowerCase()
  const requiredSkills = jobRequirements.skills.map((s: string) => s.toLowerCase())
  
  // Extract matching skills
  const matchingSkills = requiredSkills.filter(skill => 
    resumeLower.includes(skill)
  )
  
  // Simple experience extraction (look for numbers followed by "year")
  const expMatch = resumeText.match(/(\d+)\s*(?:years?|yrs?)/i)
  const experienceYears = expMatch ? parseInt(expMatch[1]) : 0
  
  // Calculate match score
  const skillMatchRatio = matchingSkills.length / requiredSkills.length
  const matchScore = Math.min(skillMatchRatio * 0.8 + (experienceYears > 0 ? 0.2 : 0), 1.0)
  
  return {
    skills_extracted: matchingSkills,
    experience_years: experienceYears,
    education_level: resumeLower.includes('bachelor') ? 'Bachelor\'s' : 
                    resumeLower.includes('master') ? 'Master\'s' : 
                    resumeLower.includes('phd') ? 'PhD' : 'Not specified',
    matching_skills: matchingSkills,
    match_score: Math.round(matchScore * 100) / 100,
    analysis_summary: `Found ${matchingSkills.length} matching skills out of ${requiredSkills.length} required. ${experienceYears} years of experience detected.`
  }
}
