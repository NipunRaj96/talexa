
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <h1 className="text-black text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-[1.2px] text-center max-w-[300px] sm:max-w-[500px] lg:max-w-[700px] leading-tight sm:leading-normal">
        Hiring the right talent is Hard.
        <br />
        Filtering resumes shouldn't be.
      </h1>
      
      <Link
        to="/create-job"
        className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-black font-medium tracking-[0.8px] bg-transparent border border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
      >
        CREATE A JOB POSTING
      </Link>
    </section>
  );
};

export default Hero;
