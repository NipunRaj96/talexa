
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Toaster, toast } from "sonner";
import EditJobForm from "../components/home/EditJobForm";

const EditJob: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [jobExists, setJobExists] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if job exists in localStorage
    const storedJobs = localStorage.getItem("jobPostings");
    if (storedJobs) {
      const jobs = JSON.parse(storedJobs);
      const jobExists = jobs.some((job: any) => job.id === jobId);
      setJobExists(jobExists);
      
      if (!jobExists) {
        toast.error("Job posting not found");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } else {
      toast.error("No job postings found");
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  }, [jobId, navigate]);

  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <Toaster position="top-center" />
      <div className="w-full max-w-7xl px-4 py-6 flex flex-col items-center">
        <Navbar />
        <div className="container mx-auto py-16">
          <h1 className="text-black text-4xl font-medium tracking-wider text-center mb-12">
            Edit Job Posting
          </h1>
          {jobExists && <EditJobForm jobId={jobId!} />}
        </div>
      </div>
      <div className="w-full max-w-7xl px-4 flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default EditJob;
