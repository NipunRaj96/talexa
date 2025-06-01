
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

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
          {user && (
            <Link to="/dashboard" className="hover:text-gray-600 transition-colors">
              DASHBOARD
            </Link>
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-2">
            <Link 
              to="/create-job" 
              className="hover:text-gray-600 transition-colors text-xs sm:text-sm lg:text-[15px] tracking-[0.8px]"
            >
              CREATE JOB
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-xs sm:text-sm lg:text-[15px] tracking-[0.8px]"
            >
              <LogOut className="h-4 w-4 mr-1" />
              LOGOUT
            </Button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="hover:text-gray-600 transition-colors text-xs sm:text-sm lg:text-[15px] tracking-[0.8px]"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
