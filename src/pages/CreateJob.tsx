import React from "react";
import Layout from "../components/layout/Layout";
import CreateJobForm from "../components/home/CreateJobForm";
import { Toaster } from "sonner";

const CreateJob: React.FC = () => {
  return (
    <Layout>
      <Toaster position="top-center" />
      <div className="container mx-auto py-16">
        <h1 className="text-black text-4xl font-medium tracking-wider text-center mb-12">
          Create a New Job Posting
        </h1>
        <CreateJobForm />
      </div>
    </Layout>
  );
};

export default CreateJob;
