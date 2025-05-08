
import React from "react";
import Step from "./Step";
import { IMAGES } from "../../assets/images";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[rgba(233,233,233,0.8)] self-stretch flex flex-col overflow-hidden items-center pt-[70px] pb-[120px] px-20 mt-[80px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex mb-[-20px] w-full max-w-[1050px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-black text-[30px] font-normal tracking-[1.5px] text-center max-md:max-w-full">
          Talexa highlights talent beyond the numbers.
          <br />
          <span className="font-medium">Smarter shortlisting, without the bias.</span>
        </h2>
        
        <img
          src={IMAGES.DIVIDER}
          alt="Divider"
          className="aspect-[0.02] object-contain w-0.5 mt-[25px]"
        />
        
        <button className="bg-white w-[280px] max-w-full overflow-hidden text-[24px] text-black font-medium text-center tracking-[1.2px] mt-[25px] px-[50px] py-[20px] rounded-[30px] shadow-sm hover:shadow-md transition-all max-md:px-5">
          HOW IT WORKS
        </button>
        
        <div className="self-stretch mt-[50px] max-md:max-w-full">
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
            {/* Left column */}
            <div className="w-[58%] max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[73%] max-md:w-full max-md:ml-0">
                      <Step 
                        icon={IMAGES.CREATE_JOB_ICON}
                        title="Create A Job Posting"
                        description="Define your requirements and the skills you're looking for in candidates."
                        className="w-full mt-[100px] pb-[90px] px-[40px] max-md:max-w-full max-md:mt-10 max-md:pb-[80px] max-md:px-5"
                      />
                    </div>
                    <div className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="grow">
                        <img
                          src={IMAGES.ARROW_1}
                          alt="Arrow"
                          className="aspect-[0.33] object-contain w-[94px]"
                        />
                        <img
                          src={IMAGES.ARROW_2}
                          alt="Arrow"
                          className="aspect-[0.95] object-contain w-[186px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[73%] max-md:w-full max-md:ml-0">
                      <Step 
                        icon={IMAGES.AI_ICON}
                        title="AI Magic !!"
                        description="Our AI scores and ranks candidates based on their skills and experience match to your requirements."
                        className="w-full mt-[90px] pl-[40px] pr-[40px] pt-8 pb-[80px] max-md:max-w-full max-md:mt-10 max-md:px-5"
                      />
                    </div>
                    <div className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="grow">
                        <img
                          src={IMAGES.ARROW_3}
                          alt="Arrow"
                          className="aspect-[0.69] object-contain w-[186px]"
                        />
                        <img
                          src={IMAGES.ARROW_4}
                          alt="Arrow"
                          className="aspect-[0.97] object-contain w-[186px] mt-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow text-black mt-[290px] max-md:max-w-full max-md:mt-10">
                <Step 
                  icon={IMAGES.APPLY_ICON}
                  title="Candidates Apply"
                  description="Share your unique job link and collect applications with resumes."
                  className="pb-[90px] px-[40px] max-md:max-w-full max-md:pb-[80px] max-md:px-5"
                />
                
                <Step 
                  icon={IMAGES.REVIEW_ICON}
                  title="Review Top Matches"
                  description="Get instant access to the best-matched candidates and make data-driven hiring decisions."
                  className="mt-[140px] px-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
