
import React from "react";
import { Button } from "../ui/button";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm h-full flex flex-col">
      <div className="bg-[#f2f2f2] w-8 h-8 rounded-full flex items-center justify-center mb-4">
        <span className="text-sm">{number}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#f2f2f2] w-full py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-normal mb-2 px-4">
            Talexa highlights talent beyond the numbers.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Smarter shortlisting, without the bias.</span>
          </h2>
          
          <div className="w-0.5 h-8 sm:h-12 bg-gray-300 mx-auto my-4"></div>
          
          <Button 
            className="bg-white text-black rounded-full px-6 sm:px-8 py-2 text-base sm:text-lg font-medium hover:bg-white cursor-default"
          >
            HOW IT WORKS
          </Button>
        </div>
        
        <div className="flex flex-col relative">
          {/* Center connecting line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2 z-0 hidden md:block"></div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-6">
            <Step 
              number={1}
              title="Create A Job Posting"
              description="Define your requirements and the skills you're looking for in candidates."
            />
            <Step 
              number={2}
              title="Candidates Apply"
              description="Share your unique job link and collect applications with resumes."
            />
            <Step 
              number={3}
              title="AI Magic !!"
              description="Our AI scores and ranks candidates based on their skills and experience match to your requirements."
            />
            <Step 
              number={4}
              title="Review Top Matches"
              description="Get instant access to the best-matched candidates and make data-driven hiring decisions."
            />
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left side */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative z-10">
                <div className="flex justify-end">
                  <div className="w-full max-w-md">
                    <Step 
                      number={1}
                      title="Create A Job Posting"
                      description="Define your requirements and the skills you're looking for in candidates."
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10">
                <div className="flex justify-end">
                  <div className="w-full max-w-md">
                    <Step 
                      number={3}
                      title="AI Magic !!"
                      description="Our AI scores and ranks candidates based on their skills and experience match to your requirements."
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side */}
            <div className="space-y-24 md:mt-24">
              {/* Step 2 */}
              <div className="relative z-10">
                <div className="flex justify-start">
                  <div className="w-full max-w-md">
                    <Step 
                      number={2}
                      title="Candidates Apply"
                      description="Share your unique job link and collect applications with resumes."
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10">
                <div className="flex justify-start">
                  <div className="w-full max-w-md">
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
      </div>
    </section>
  );
};

export default HowItWorks;
