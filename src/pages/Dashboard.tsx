
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  applicants: number;
  status: "active" | "closed";
  createdAt: string;
}

const Dashboard: React.FC = () => {
  // Mock data for job postings
  const jobPostings: JobPosting[] = [
    {
      id: "job-1",
      title: "Frontend Developer",
      company: "Talexa Inc.",
      location: "Remote",
      applicants: 24,
      status: "active",
      createdAt: "2023-09-15",
    },
    {
      id: "job-2",
      title: "UX Designer",
      company: "Talexa Inc.",
      location: "New York, NY",
      applicants: 18,
      status: "active",
      createdAt: "2023-09-10",
    },
    {
      id: "job-3",
      title: "Backend Engineer",
      company: "Talexa Inc.",
      location: "San Francisco, CA",
      applicants: 32,
      status: "closed",
      createdAt: "2023-08-20",
    },
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pt-[26px] pb-4">
      <Navbar />
      <div className="container mx-auto py-16">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-black text-[40px] font-medium tracking-[2px] max-md:text-[30px]">
            Dashboard
          </h1>
          <Link to="/create-job">
            <Button variant="gradient" size="talexa">
              CREATE NEW JOB
            </Button>
          </Link>
        </div>

        <div className="bg-[rgba(233,233,233,0.5)] rounded-[20px] p-8 shadow-sm">
          <h2 className="text-[28px] font-medium tracking-[1.4px] mb-6">Your Job Postings</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[rgba(233,233,233,0.8)]">
                <tr>
                  <th className="text-left p-4 font-medium">Job Title</th>
                  <th className="text-left p-4 font-medium">Location</th>
                  <th className="text-left p-4 font-medium">Applicants</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Created</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobPostings.map((job) => (
                  <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.company}</div>
                    </td>
                    <td className="p-4">{job.location}</td>
                    <td className="p-4">{job.applicants}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        job.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">{job.createdAt}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {jobPostings.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 mb-6">You haven't created any job postings yet.</p>
              <Link to="/create-job">
                <Button variant="gradient" size="talexa">
                  CREATE YOUR FIRST JOB
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        <div className="mt-12 bg-[rgba(233,233,233,0.5)] rounded-[20px] p-8 shadow-sm">
          <h2 className="text-[28px] font-medium tracking-[1.4px] mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">New applicant for Frontend Developer</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">UX Designer job posting is now live</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">AI matched 5 top candidates for Backend Engineer</p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
