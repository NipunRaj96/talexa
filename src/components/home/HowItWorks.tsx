
import React from "react";
import { Button } from "../ui/button";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
      <div className="bg-[#f2f2f2] w-8 h-8 rounded-full flex items-center justify-center mb-4">
        <span className="text-sm">{number}</span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#f2f2f2] w-full py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal mb-2">
            Talexa highlights talent beyond the numbers.
            <br />
            Smarter shortlisting, without the bias.
          </h2>
          
          <div className="w-0.5 h-12 bg-gray-300 mx-auto my-4"></div>
          
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-2 text-lg font-medium"
          >
            HOW IT WORKS
          </Button>
        </div>
        
        <div className="flex flex-col relative">
          {/* Center connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2 z-0"></div>
          
          {/* Steps layout with ladder pattern */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Step 1 - Left */}
            <div className="relative z-10 md:mb-16">
              <div className="flex justify-end">
                <div className="w-full h-[200px] max-w-md">
                  <Step 
                    number={1}
                    title="Create A Job Posting"
                    description="Define your requirements and the skills you're looking for in candidates."
                  />
                </div>
              </div>
            </div>
            
            {/* Empty space for Step 2 offset */}
            <div className="hidden md:block"></div>
            
            {/* Step 2 - Right */}
            <div className="hidden md:block"></div>
            
            <div className="relative z-10 md:mt-[-100px]">
              <div className="flex justify-start">
                <div className="w-full h-[200px] max-w-md">
                  <Step 
                    number={2}
                    title="Candidates Apply"
                    description="Share your unique job link and collect applications with resumes."
                  />
                </div>
              </div>
            </div>
            
            {/* Step 3 - Left */}
            <div className="relative z-10 md:mb-16 md:mt-[-100px]">
              <div className="flex justify-end">
                <div className="w-full h-[200px] max-w-md">
                  <Step 
                    number={3}
                    title="AI Magic !!"
                    description="Our AI scores and ranks candidates based on their skills and experience match to your requirements."
                  />
                </div>
              </div>
            </div>
            
            {/* Empty space for Step 4 offset */}
            <div className="hidden md:block"></div>
            
            {/* Step 4 - Right */}
            <div className="hidden md:block"></div>
            
            <div className="relative z-10 md:mt-[-100px]">
              <div className="flex justify-start">
                <div className="w-full h-[200px] max-w-md">
                  <Step 
                    number={4}
                    title="Review Top Matches"
                    description="Get instant access to the best-matched candidates and make data-driven hiring decisions."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
