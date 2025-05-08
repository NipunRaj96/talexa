
import React from "react";
import Navbar from "../components/layout/Navbar";
import CreateJobForm from "../components/home/CreateJobForm";
import Footer from "../components/layout/Footer";

const CreateJob: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl px-4 py-6 flex flex-col items-center">
        <Navbar />
        <div className="container mx-auto py-16">
          <h1 className="text-black text-4xl font-medium tracking-wider text-center mb-12">
            Create a New Job Posting
          </h1>
          <CreateJobForm />
        </div>
      </div>
      <div className="w-full max-w-7xl px-4 flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default CreateJob;
