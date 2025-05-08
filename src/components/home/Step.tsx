import React from "react";

interface StepProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`bg-white flex flex-col overflow-hidden text-black pt-8 pb-[85px] px-[33px] rounded-[40px] ${className}`}>
      <img
        src={icon}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-[60px]"
      />
      <h3 className="text-[25px] font-medium tracking-[1.25px] text-center ml-[25px] mt-[27px] max-md:ml-2.5">
        {title}
      </h3>
      <p className="text-xl font-normal tracking-[1px] self-stretch ml-[25px] mt-2 max-md:ml-2.5">
        {description}
      </p>
    </div>
  );
};

export default Step;
