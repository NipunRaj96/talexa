
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Toaster, toast } from "sonner";

interface JobPosting {
  id: string;
  jobTitle: string;
  minimumExperience: string;
  description: string;
  numberOfVacancies: string;
  skills: string[];
  createdAt: string;
  status: "active" | "closed";
  applicants: number;
}

const ApplyJob: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobDetails = () => {
      console.log("Fetching job details for ID:", jobId);
      
      // First try to get from localStorage
      const storedJobs = localStorage.getItem("jobPostings");
      console.log("Stored jobs:", storedJobs);
      
      if (storedJobs) {
        try {
          const jobs = JSON.parse(storedJobs);
          const foundJob = jobs.find((j: JobPosting) => j.id === jobId);
          
          if (foundJob) {
            console.log("Job found:", foundJob);
            if (foundJob.status === "closed") {
              setError("This job posting is no longer accepting applications.");
            }
            setJob(foundJob);
          } else {
            console.log("Job not found in localStorage");
            // Job not found in localStorage - this could be a shared link
            setError("Job posting not found. The link may be expired or invalid.");
          }
        } catch (parseError) {
          console.error("Error parsing stored jobs:", parseError);
          setError("Error loading job data.");
        }
      } else {
        console.log("No stored jobs found");
        // No jobs in localStorage - could be a fresh browser or shared link
        setError("Job posting not found. The link may be expired or invalid.");
      }
      setLoading(false);
    };

    if (jobId) {
      fetchJobDetails();
    } else {
      setError("Invalid job link.");
      setLoading(false);
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="bg-white flex flex-col items-center min-h-screen">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 flex flex-col items-center">
          <Navbar />
          <div className="container mx-auto py-8 sm:py-12 lg:py-16 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Loading job details...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <Toaster position="top-center" />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 flex flex-col items-center">
        <Navbar />
        <div className="container mx-auto py-8 sm:py-12 lg:py-16">
          {error ? (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">{error}</h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  {error.includes("not found") 
                    ? "This could happen if the job posting was created in a different browser session. Please contact the recruiter for a valid link."
                    : "Please try again or contact support if the problem persists."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Return to Home
                    </Button>
                  </Link>
                  <Button 
                    variant="gradient" 
                    className="w-full sm:w-auto"
                    onClick={() => window.location.reload()}
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          ) : job ? (
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">{job.jobTitle}</h1>
                  <p className="opacity-90">Apply for this position</p>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Experience Required</h3>
                      <p className="mt-1 text-lg">{job.minimumExperience}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Number of Vacancies</h3>
                      <p className="mt-1 text-lg">{job.numberOfVacancies}</p>
                    </div>
                  </div>
                  
                  {job.description && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Job Description</h3>
                      <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 sm:p-6 -mx-4 sm:-mx-6 lg:-mx-8 -mb-4 sm:-mb-6 lg:-mb-8 mt-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">Upload Your Resume</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      Upload your resume below. Our AI system will analyze your skills 
                      and experiences to match you with this position.
                    </p>
                    
                    {job.status === "active" ? (
                      <div className="mt-4 flex flex-col gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-gray-400 transition-colors">
                          <div className="mb-4">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-gray-500 mb-4 text-sm sm:text-base">Drag and drop your resume file here, or click to select</p>
                          <Button 
                            variant="outline" 
                            onClick={() => toast("This feature will be implemented in the next phase.")}
                            className="mb-2"
                          >
                            Select File
                          </Button>
                          <p className="text-xs text-gray-400">Supported formats: PDF, DOCX, RTF (Max 5MB)</p>
                        </div>
                        
                        <Button 
                          variant="gradient" 
                          className="mt-4 w-full sm:w-auto" 
                          size="lg"
                          onClick={() => toast("This feature will be implemented in the next phase.")}
                        >
                          Submit Application
                        </Button>
                      </div>
                    ) : (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <p className="text-yellow-700">
                          This job posting is no longer accepting applications.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ApplyJob;
