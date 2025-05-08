
import React from "react";
import { Link } from "react-router-dom";
import { Cylinder } from "lucide-react";

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
        className="mt-8 px-8 py-3 rounded-full text-white font-medium tracking-[0.8px] bg-gradient-to-r from-[#6d48e5] to-[#9b87f5] hover:shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        CREATE A JOB POSTING
      </Link>
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 opacity-25 hidden lg:block">
        <Cylinder size={120} className="text-[#9b87f5]" />
      </div>
    </section>
  );
};

export default Hero;
