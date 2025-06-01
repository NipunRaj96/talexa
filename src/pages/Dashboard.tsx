
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Eye, Share, Edit, Trash2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useJobs } from "@/hooks/useJobs";

const Dashboard: React.FC = () => {
  const { jobs, loading, updateJob, deleteJob } = useJobs();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState<string | null>(null);

  const handleDeleteJob = async (jobId: string) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      await deleteJob(jobId);
    }
  };

  const handleStatusChange = async (jobId: string, newStatus: "active" | "closed") => {
    await updateJob(jobId, { status: newStatus });
  };

  const handleShareJob = (jobId: string) => {
    setShowShareModal(jobId);
  };

  const getShareableLink = (jobId: string) => {
    return `${window.location.origin}/apply/${jobId}`;
  };

  const handleCopyLink = (jobId: string) => {
    navigator.clipboard.writeText(getShareableLink(jobId));
    toast("Link copied to clipboard!");
  };

  const handleShare = async (jobId: string, jobTitle: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Job Application: ${jobTitle}`,
          text: `Apply for the ${jobTitle} position through this link:`,
          url: getShareableLink(jobId)
        });
        setShowShareModal(null);
        toast("Link shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      handleCopyLink(jobId);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-16">
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Toaster position="top-center" />
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
          
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-[rgba(233,233,233,0.8)]">
                  <tr>
                    <th className="text-left p-4 font-medium">Job Title</th>
                    <th className="text-left p-4 font-medium">Experience</th>
                    <th className="text-left p-4 font-medium">Vacancies</th>
                    <th className="text-left p-4 font-medium">Applicants</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Created</th>
                    <th className="text-center p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="font-medium">{job.job_title}</div>
                        <div className="text-sm text-gray-500 flex flex-wrap gap-1">
                          {job.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 3 && (
                            <span className="text-xs">+{job.skills.length - 3} more</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">{job.minimum_experience}</td>
                      <td className="p-4">{job.number_of_vacancies}</td>
                      <td className="p-4">{job.applicants}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            job.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                          </span>
                          <button 
                            className="ml-2 text-xs text-blue-600 hover:underline"
                            onClick={() => handleStatusChange(
                              job.id, 
                              job.status === 'active' ? 'closed' : 'active'
                            )}
                          >
                            {job.status === 'active' ? 'Close' : 'Reopen'}
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        {new Date(job.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2 justify-center">
                          <Button 
                            variant="outline" 
                            size="sm"
                            title="Share"
                            onClick={() => handleShareJob(job.id)}
                          >
                            <Share className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            title="View"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            title="Edit"
                            onClick={() => navigate(`/edit-job/${job.id}`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            title="Delete"
                            className="hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteJob(job.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {showShareModal === job.id && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                              <h3 className="text-lg font-medium mb-4">Share Job Posting</h3>
                              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 mb-6">
                                <p className="text-sm text-gray-700 truncate">{getShareableLink(job.id)}</p>
                                <button 
                                  onClick={() => handleCopyLink(job.id)}
                                  className="ml-2 p-2 text-blue-600 hover:text-blue-800"
                                  title="Copy link"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                  </svg>
                                </button>
                              </div>
                              
                              <div className="flex justify-between">
                                <Button 
                                  onClick={() => setShowShareModal(null)} 
                                  variant="outline"
                                >
                                  Close
                                </Button>
                                <Button 
                                  onClick={() => handleShare(job.id, job.job_title)}
                                  variant="gradient"
                                  className="flex items-center gap-2"
                                >
                                  <Share className="h-4 w-4" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
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
          
          {jobs.length > 0 ? (
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
                  <p className="font-medium">New job posting created: {jobs[0].job_title}</p>
                  <p className="text-sm text-gray-500">{new Date(jobs[0].created_at).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg">
              <p className="text-gray-500">No recent activity to show.</p>
              <p className="text-gray-500 text-sm mt-2">Activity will appear here when you create job postings.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
