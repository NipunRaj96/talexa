
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/create-job" 
            element={
              <ProtectedRoute>
                <CreateJob />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit-job/:jobId" 
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            } 
          />
          <Route path="/apply/:jobId" element={<ApplyJob />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
