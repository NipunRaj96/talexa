
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface JobApplication {
  id: string;
  job_id: string;
  applicant_name: string;
  applicant_email: string;
  resume_url?: string;
  resume_text?: string;
  skills_extracted: string[];
  experience_years: number;
  education_level: string;
  match_score: number;
  analysis_result: any;
  created_at: string;
  updated_at: string;
}

export const useJobApplications = (jobId?: string) => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async (specificJobId?: string) => {
    try {
      let query = supabase
        .from('job_applications')
        .select('*')
        .order('match_score', { ascending: false });

      if (specificJobId || jobId) {
        query = query.eq('job_id', specificJobId || jobId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setApplications((data as JobApplication[]) || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast.error('Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  const submitApplication = async (formData: {
    jobId: string;
    applicantName: string;
    applicantEmail: string;
    resumeFile: File;
    jobRequirements: {
      skills: string[];
      experience: string;
      description?: string;
    };
  }) => {
    try {
      // Upload resume file to storage
      const fileExt = formData.resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${formData.jobId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, formData.resumeFile);

      if (uploadError) throw uploadError;

      // Extract text from resume (simplified - in production you'd use a proper PDF parser)
      const resumeText = await extractTextFromFile(formData.resumeFile);

      // Call the edge function for AI analysis
      const { data, error } = await supabase.functions.invoke('analyze-resume', {
        body: {
          jobId: formData.jobId,
          applicantName: formData.applicantName,
          applicantEmail: formData.applicantEmail,
          resumeText: resumeText,
          jobRequirements: formData.jobRequirements
        }
      });

      if (error) throw error;

      toast.success('Application submitted successfully!');
      fetchApplications(formData.jobId);
      return data;
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application');
      return null;
    }
  };

  const extractTextFromFile = async (file: File): Promise<string> => {
    // This is a simplified text extraction
    // In production, you'd use libraries like pdf-parse for PDFs
    if (file.type === 'text/plain') {
      return await file.text();
    }
    
    // For demo purposes, return a placeholder
    return `Resume content from ${file.name}. Skills: JavaScript, React, Node.js, TypeScript. Experience: 3 years of software development.`;
  };

  useEffect(() => {
    if (jobId) {
      fetchApplications();
    }
  }, [jobId]);

  return {
    applications,
    loading,
    fetchApplications,
    submitApplication
  };
};
