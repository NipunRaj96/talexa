import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(233,233,233,1)] flex w-[1356px] max-w-full items-stretch gap-5 overflow-hidden text-black font-medium flex-wrap justify-between pl-[46px] pr-[11px] py-[9px] rounded-[50px] max-md:pl-5">
      <div className="text-[25px] tracking-[1.25px] my-auto">
        TALEXA
      </div>
      <div className="flex items-center gap-8 text-[23px] tracking-[1.15px] flex-wrap">
        <Link to="/" className="self-stretch my-auto">
          HOME
        </Link>
        <Link to="/dashboard" className="self-stretch basis-auto my-auto">
          DASHBOARD
        </Link>
        <Link 
          to="/create-job" 
          className="bg-white self-stretch overflow-hidden px-[35px] py-3 rounded-[60px] max-md:px-5"
        >
          CREATE JOB
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
