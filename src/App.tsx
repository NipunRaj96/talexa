
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/edit-job/:jobId" element={<EditJob />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;
