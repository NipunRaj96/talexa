
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(233,233,233,0.95)] flex w-[1200px] max-w-full items-stretch gap-5 overflow-hidden text-black font-medium justify-between px-[46px] py-[12px] rounded-[50px] shadow-sm max-md:pl-5">
      <div className="text-[26px] tracking-[1.3px] my-auto font-semibold">
        TALEXA
      </div>
      <div className="flex items-center gap-10 text-[20px] tracking-[1.15px] flex-wrap">
        <Link to="/" className="self-stretch my-auto hover:text-gray-600 transition-colors">
          HOME
        </Link>
        <Link to="/dashboard" className="self-stretch basis-auto my-auto hover:text-gray-600 transition-colors">
          DASHBOARD
        </Link>
        <Link 
          to="/create-job" 
          className="bg-white self-stretch overflow-hidden px-[35px] py-3 rounded-[60px] shadow-sm hover:shadow-md transition-all max-md:px-5"
        >
          CREATE JOB
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
