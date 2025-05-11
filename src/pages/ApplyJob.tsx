
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
    // Fetch job details from localStorage
    const storedJobs = localStorage.getItem("jobPostings");
    if (storedJobs) {
      const jobs = JSON.parse(storedJobs);
      const foundJob = jobs.find((j: JobPosting) => j.id === jobId);
      
      if (foundJob) {
        if (foundJob.status === "closed") {
          setError("This job posting is no longer accepting applications.");
        }
        setJob(foundJob);
      } else {
        setError("Job posting not found.");
      }
    } else {
      setError("No job postings available.");
    }
    setLoading(false);
  }, [jobId]);

  if (loading) {
    return (
      <div className="bg-white flex flex-col items-center min-h-screen">
        <div className="w-full max-w-7xl px-4 py-6 flex flex-col items-center">
          <Navbar />
          <div className="container mx-auto py-16 flex items-center justify-center">
            <p>Loading job details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <Toaster position="top-center" />
      <div className="w-full max-w-7xl px-4 py-6 flex flex-col items-center">
        <Navbar />
        <div className="container mx-auto py-16">
          {error ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{error}</h2>
              <Link to="/">
                <Button variant="gradient" size="talexa">
                  Return to Home
                </Button>
              </Link>
            </div>
          ) : job ? (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{job.jobTitle}</h1>
                  <p className="opacity-90">Apply for this position</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  
                  <div className="bg-gray-50 p-6 -mx-6 -mb-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Upload Your Resume</h3>
                    <p className="text-gray-600 mb-4">
                      Upload your resume below. Our AI system will analyze your skills 
                      and experiences to match you with this position.
                    </p>
                    
                    {job.status === "active" ? (
                      <div className="mt-4 flex flex-col gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <p className="text-gray-500 mb-4">Drag and drop your resume file here, or click to select</p>
                          <Button 
                            variant="outline" 
                            onClick={() => toast("This feature will be implemented in the next phase.")}
                          >
                            Select File
                          </Button>
                          <p className="text-xs text-gray-400 mt-2">Supported formats: PDF, DOCX, RTF (Max 5MB)</p>
                        </div>
                        
                        <Button 
                          variant="gradient" 
                          className="mt-4" 
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
      <div className="w-full max-w-7xl px-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ApplyJob;
