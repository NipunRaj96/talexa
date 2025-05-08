import React from "react";
import { IMAGES } from "../../assets/images";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1262px] mt-[72px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[27%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-black max-md:mt-10">
            <div className="text-[25px] font-medium tracking-[1.25px]">
              TALEXA
            </div>
            <div className="text-xl font-normal tracking-[1px]">
              Because CGPA Isn't Everything.
            </div>
          </div>
        </div>
        <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="flex gap-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={IMAGES.LINKEDIN}
                  alt="LinkedIn"
                  className="aspect-[1.61] object-contain w-[66px] shrink-0 mt-[7px]"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={IMAGES.TWITTER}
                  alt="Twitter"
                  className="aspect-[1] object-contain w-12 shrink-0"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={IMAGES.INSTAGRAM}
                  alt="Instagram"
                  className="aspect-[1.12] object-contain w-12 self-stretch shrink-0 my-auto"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={IMAGES.FACEBOOK}
                  alt="Facebook"
                  className="aspect-[1] object-contain w-[46px] shrink-0"
                />
              </a>
            </div>
            <div className="text-black text-xl font-normal tracking-[1px] mt-[126px] max-md:mt-10">
              © 2025 Talexa. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
