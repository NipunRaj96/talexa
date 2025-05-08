import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets/images";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[55px] font-medium tracking-[2.75px] text-center mt-[231px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Hiring the right talent is Hard.
        <br />
        Filtering resumes shouldn't be.
      </h1>
      <Link
        to="/create-job"
        className="w-[289px] max-w-full overflow-hidden text-xl text-white font-medium tracking-[1px] mt-[25px] px-[26px] py-[19px] rounded-[30px] max-md:px-5 bg-black"
      >
        CREATE A JOB POSTING
      </Link>
      <img
        src={IMAGES.HERO_IMAGE}
        alt="Talexa hero illustration"
        className="aspect-[1] object-contain w-[297px] z-10 max-w-full ml-[78px] mt-[13px] max-md:ml-2.5"
      />
    </section>
  );
};

export default Hero;
