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
    <nav className="bg-[#f2f2f2] flex w-full items-center overflow-hidden text-black font-medium justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-sm">
      <Link to="/" className="text-lg sm:text-xl lg:text-2xl tracking-[1px] font-semibold hover:opacity-80 transition-opacity">
        TALEXA
      </Link>
      <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8 text-sm sm:text-base tracking-[0.8px]">
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
          <div className="flex items-center gap-2 sm:gap-4">
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
              className="text-sm sm:text-base tracking-[0.8px] gap-1.5 sm:gap-2 py-2 px-2.5 sm:px-3"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">LOGOUT</span>
            </Button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="hover:text-gray-600 transition-colors text-sm sm:text-base tracking-[0.8px] py-2"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;