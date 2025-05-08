import React from "react";
import Navbar from "../components/layout/Navbar";
import CreateJobForm from "../components/home/CreateJobForm";
import Footer from "../components/layout/Footer";

const CreateJob: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pt-[26px] pb-4">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-black text-[45px] font-medium tracking-[2.25px] text-center mb-12 max-md:text-[35px]">
          Create a New Job Posting
        </h1>
        <CreateJobForm />
      </div>
      <Footer />
    </div>
  );
};

export default CreateJob;
