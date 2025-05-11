import React from 'react';
import Navbar from './Navbar'; // Adjust the import path if necessary
import Footer from './Footer'; // Adjust the import path if necessary

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col items-center">
        <Navbar />
      </div>
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
        {children}
      </main>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;