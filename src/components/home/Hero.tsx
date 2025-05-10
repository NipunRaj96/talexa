
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-20 relative">
      <h1 className="text-black text-[40px] font-medium tracking-[1.2px] text-center max-w-[700px] max-md:max-w-full max-md:text-[28px]">
        Hiring the right talent is Hard.
        <br />
        Filtering resumes shouldn't be.
      </h1>
      
      <Link
        to="/create-job"
        className="mt-8 px-8 py-3 rounded-full text-black font-medium tracking-[0.8px] bg-transparent border border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
      >
        CREATE A JOB POSTING
      </Link>
    </section>
  );
};

export default Hero;
