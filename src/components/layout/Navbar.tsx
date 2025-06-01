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
    <nav className="bg-[#f2f2f2] flex w-full items-center overflow-hidden text-black font-medium justify-between px-6 sm:px-8 lg:px-10 py-3 rounded-full shadow-sm">
      <div className="text-xl sm:text-2xl lg:text-[24px] tracking-[1px] font-semibold">
        TALEXA
      </div>
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base tracking-[0.8px]">
          <Link to="/" className="hover:text-gray-600 transition-colors hidden sm:block">
            HOME
          </Link>
          {user && (
            <Link to="/dashboard" className="hover:text-gray-600 transition-colors">
              DASHBOARD
            </Link>
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/create-job" 
              className="hover:text-gray-600 transition-colors text-sm sm:text-base tracking-[0.8px] hidden sm:block"
            >
              CREATE JOB
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-sm sm:text-base tracking-[0.8px] gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">LOGOUT</span>
            </Button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="hover:text-gray-600 transition-colors text-sm sm:text-base tracking-[0.8px]"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;