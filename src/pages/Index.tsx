import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Footer from "../components/layout/Footer";

const Index: React.FC = () => {
  return (
    <main className="bg-white flex flex-col overflow-hidden items-center pt-[26px] pb-4">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Index;
