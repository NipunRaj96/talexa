
import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Footer from "../components/layout/Footer";

const Index: React.FC = () => {
  return (
    <main className="bg-white flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl px-6 py-6 flex flex-col items-center">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <div className="w-full max-w-7xl px-6 flex justify-center">
        <Footer />
      </div>
    </main>
  );
};

export default Index;
