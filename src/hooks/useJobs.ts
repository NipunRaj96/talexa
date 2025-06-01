
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface JobPosting {
  id: string;
  job_title: string;
  minimum_experience: string;
  description: string | null;
  number_of_vacancies: string;
  skills: string[];
  status: 'active' | 'closed';
  applicants: number;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export const useJobs = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchJobs = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('Failed to fetch job postings');
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (jobData: Omit<JobPosting, 'id' | 'created_at' | 'updated_at' | 'user_id' | 'applicants'>) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('job_postings')
        .insert([{
          ...jobData,
          user_id: user.id
        }])
        .select()
        .single();

      if (error) throw error;

      toast.success('Job posting created successfully!');
      fetchJobs(); // Refresh the list
      return data;
    } catch (error) {
      console.error('Error creating job:', error);
      toast.error('Failed to create job posting');
      return null;
    }
  };

  const updateJob = async (jobId: string, updates: Partial<JobPosting>) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('job_postings')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', jobId)
        .eq('user_id', user.id);

      if (error) throw error;

      toast.success('Job posting updated successfully!');
      fetchJobs(); // Refresh the list
      return true;
    } catch (error) {
      console.error('Error updating job:', error);
      toast.error('Failed to update job posting');
      return false;
    }
  };

  const deleteJob = async (jobId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('job_postings')
        .delete()
        .eq('id', jobId)
        .eq('user_id', user.id);

      if (error) throw error;

      toast.success('Job posting deleted successfully!');
      fetchJobs(); // Refresh the list
      return true;
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('Failed to delete job posting');
      return false;
    }
  };

  const getJobById = async (jobId: string) => {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching job:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [user]);

  return {
    jobs,
    loading,
    fetchJobs,
    createJob,
    updateJob,
    deleteJob,
    getJobById
  };
};
