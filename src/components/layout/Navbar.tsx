
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#f2f2f2] flex w-full items-center overflow-hidden text-black font-medium justify-between px-8 py-1 rounded-full shadow-sm">
      <div className="text-[20px] tracking-[1px] font-semibold">
        TALEXA
      </div>
      <div className="flex items-center gap-4 sm:gap-8 text-[15px] tracking-[0.8px] ml-auto">
        <Link to="/" className="hover:text-gray-600 transition-colors">
          HOME
        </Link>
        <Link to="/dashboard" className="hover:text-gray-600 transition-colors">
          DASHBOARD
        </Link>
        <Link 
          to="/create-job" 
          className="bg-transparent border border-black text-black px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-all"
        >
          CREATE JOB
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
