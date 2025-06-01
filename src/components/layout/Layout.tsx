import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6 pb-4 sm:pb-5 lg:pb-6 flex flex-col items-center">
        <Navbar />
      </div>
      <main className="w-full flex-grow">
        {children}
      </main>
      <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 flex justify-center mt-16 sm:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;