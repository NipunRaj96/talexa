
import React from "react";
import { IMAGES } from "../../assets/images";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1100px] mt-[90px] px-8 max-md:max-w-full max-md:mt-10">
      <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[30%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-black max-md:mt-10">
            <div className="text-[26px] font-semibold tracking-[1.3px]">
              TALEXA
            </div>
            <div className="text-lg font-normal tracking-[0.9px] text-gray-700 mt-2">
              Because CGPA Isn't Everything.
            </div>
          </div>
        </div>
        <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={IMAGES.LINKEDIN}
                  alt="LinkedIn"
                  className="aspect-[1.61] object-contain w-[60px] shrink-0"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={IMAGES.TWITTER}
                  alt="Twitter"
                  className="aspect-[1] object-contain w-11 shrink-0"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={IMAGES.INSTAGRAM}
                  alt="Instagram"
                  className="aspect-[1.12] object-contain w-11 self-stretch shrink-0 my-auto"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={IMAGES.FACEBOOK}
                  alt="Facebook"
                  className="aspect-[1] object-contain w-[42px] shrink-0"
                />
              </a>
            </div>
            <div className="text-black text-lg font-normal tracking-[0.9px] mt-[100px] text-gray-700 max-md:mt-10">
              © 2025 Talexa. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
