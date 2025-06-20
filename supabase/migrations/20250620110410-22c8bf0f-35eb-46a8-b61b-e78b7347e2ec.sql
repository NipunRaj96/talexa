
-- Create table for job applications
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.job_postings(id) ON DELETE CASCADE,
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  resume_url TEXT,
  resume_text TEXT,
  skills_extracted TEXT[],
  experience_years INTEGER,
  education_level TEXT,
  match_score DECIMAL(3,2),
  analysis_result JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_job_applications_job_id ON public.job_applications(job_id);
CREATE INDEX idx_job_applications_match_score ON public.job_applications(match_score DESC);

-- Enable Row Level Security
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (since we removed auth)
CREATE POLICY "Anyone can view applications" 
  ON public.job_applications 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can create applications" 
  ON public.job_applications 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can update applications" 
  ON public.job_applications 
  FOR UPDATE 
  USING (true);

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true);

-- Create storage policy for resumes
CREATE POLICY "Anyone can upload resumes" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resumes');
CREATE POLICY "Anyone can view resumes" ON storage.objects FOR SELECT USING (bucket_id = 'resumes');
