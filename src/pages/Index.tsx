
import React from "react";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Layout from "../components/layout/Layout";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
