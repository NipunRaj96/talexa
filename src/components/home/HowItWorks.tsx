import React from "react";
import Step from "./Step";
import { IMAGES } from "../../assets/images";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[rgba(233,233,233,1)] self-stretch flex flex-col overflow-hidden items-center pt-[63px] pb-[134px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex mb-[-27px] w-full max-w-[1172px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-black text-[32px] font-normal tracking-[1.6px] text-center max-md:max-w-full">
          Talexa highlights talent beyond the numbers.
          <br />
          Smarter shortlisting, without the bias.
        </h2>
        
        <img
          src={IMAGES.DIVIDER}
          alt="Divider"
          className="aspect-[0.02] object-contain w-0.5 mt-[19px]"
        />
        
        <button className="bg-white w-[314px] max-w-full overflow-hidden text-[26px] text-black font-medium text-center tracking-[1.3px] mt-[18px] px-[57px] py-[22px] rounded-[30px] max-md:px-5">
          HOW IT WORKS
        </button>
        
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
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
                        className="w-full mt-[121px] pb-[109px] px-[58px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5"
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
                <div className="mt-[5px] max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[73%] max-md:w-full max-md:ml-0">
                      <Step 
                        icon={IMAGES.AI_ICON}
                        title="AI Magic !!"
                        description="Our AI scores and ranks candidates based on their skills and experience match to your requirements."
                        className="w-full mt-[106px] pl-[33px] pr-20 pt-8 pb-[85px] max-md:max-w-full max-md:mt-10 max-md:px-5"
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
              <div className="grow text-black mt-80 max-md:max-w-full max-md:mt-10">
                <Step 
                  icon={IMAGES.APPLY_ICON}
                  title="Candidates Apply"
                  description="Share your unique job link and collect applications with resumes."
                  className="pb-[109px] max-md:max-w-full max-md:pb-[100px] max-md:px-5"
                />
                
                <Step 
                  icon={IMAGES.REVIEW_ICON}
                  title="Review Top Matches"
                  description="Get instant access to the best-matched candidates and make data-driven hiring decisions."
                  className="mt-[157px] max-md:max-w-full max-md:mt-10 max-md:px-5"
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
