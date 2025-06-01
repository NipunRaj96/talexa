
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#f2f2f2] flex w-full items-center overflow-hidden text-black font-medium justify-between px-4 sm:px-6 lg:px-8 py-1 rounded-full shadow-sm">
      <div className="text-lg sm:text-xl lg:text-[20px] tracking-[1px] font-semibold">
        TALEXA
      </div>
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 text-xs sm:text-sm lg:text-[15px] tracking-[0.8px]">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            HOME
          </Link>
          <Link to="/dashboard" className="hover:text-gray-600 transition-colors">
            DASHBOARD
          </Link>
        </div>
        <Link 
          to="/create-job" 
          className="hover:text-gray-600 transition-colors text-xs sm:text-sm lg:text-[15px] tracking-[0.8px]"
        >
          CREATE JOB
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
