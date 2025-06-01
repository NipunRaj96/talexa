import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { Eye, Share, Copy, ExternalLink } from "lucide-react";

interface FormData {
  jobTitle: string;
  minimumExperience: string;
  description: string;
  numberOfVacancies: string;
  skills: string[];
}

const CreateJobForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    jobTitle: "",
    minimumExperience: "",
    description: "",
    numberOfVacancies: "",
    skills: [],
  });
  
  const [skillInput, setSkillInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobCreated, setJobCreated] = useState(false);
  const [jobLink, setJobLink] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleExperienceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      minimumExperience: value
    }));
  };
  
  const handleAddSkill = () => {
    if (skillInput.trim() !== "" && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };
  
  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };
  
  const generateUniqueJobId = () => {
    return `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(jobLink);
      toast.success("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Job Application: ${formData.jobTitle}`,
          text: `Apply for the ${formData.jobTitle} position through this link:`,
          url: jobLink
        });
        toast.success("Link shared successfully!");
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error("Error sharing:", error);
          toast.error("Failed to share link");
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleOpenInNewTab = () => {
    window.open(jobLink, '_blank');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate a unique job ID
      const jobId = generateUniqueJobId();
      
      // Use the current domain for the shareable link
      const currentDomain = window.location.origin;
      const shareableLink = `${currentDomain}/apply/${jobId}`;
      setJobLink(shareableLink);
      
      // Create job data
      const jobData = {
        ...formData,
        id: jobId,
        createdAt: new Date().toISOString(),
        status: "active" as const,
        applicants: 0
      };
      
      console.log("Job posting created:", jobData);
      console.log("Shareable link:", shareableLink);
      
      // Store job data in localStorage
      const existingJobs = JSON.parse(localStorage.getItem("jobPostings") || "[]");
      localStorage.setItem("jobPostings", JSON.stringify([...existingJobs, jobData]));
      
      // Show success message
      toast.success("Job posting created successfully!", {
        description: "A unique application link has been generated."
      });
      
      setJobCreated(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error creating job posting:", error);
      toast.error("Failed to create job posting", {
        description: "Please try again.",
      });
      setIsSubmitting(false);
    }
  };
  
  if (jobCreated) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Job Posting Created!</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Your job posting has been created successfully. Share the unique link with candidates.</p>
          
          <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 mb-6">
            <p className="text-xs sm:text-sm text-gray-700 truncate flex-1 mr-2">{jobLink}</p>
            <button 
              onClick={handleCopyLink}
              className="ml-2 p-2 text-blue-600 hover:text-blue-800 flex-shrink-0"
              title="Copy link"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <Button 
              onClick={handleCopyLink} 
              variant="outline" 
              className="flex items-center justify-center gap-2 text-sm"
            >
              <Copy className="h-4 w-4" />
              Copy Link
            </Button>
            <Button 
              onClick={handleShare}
              variant="outline" 
              className="flex items-center justify-center gap-2 text-sm"
            >
              <Share className="h-4 w-4" />
              Share Link
            </Button>
            <Button 
              onClick={handleOpenInNewTab}
              variant="outline" 
              className="flex items-center justify-center gap-2 text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Preview
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto"
            >
              View All Jobs
            </Button>
            <Button 
              variant="gradient" 
              onClick={() => setJobCreated(false)}
              className="w-full sm:w-auto"
            >
              Create Another Job
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-base">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="rounded-lg p-3 text-base"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="minimumExperience" className="text-base">Minimum Experience Required</Label>
          <Select 
            value={formData.minimumExperience} 
            onValueChange={handleExperienceChange}
          >
            <SelectTrigger className="rounded-lg p-3 text-base">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="No experience required">No experience required</SelectItem>
              <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
              <SelectItem value="1+ years">1+ years</SelectItem>
              <SelectItem value="2+ years">2+ years</SelectItem>
              <SelectItem value="3+ years">3+ years</SelectItem>
              <SelectItem value="5+ years">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="numberOfVacancies" className="text-base">Number of Vacancies</Label>
          <Input
            id="numberOfVacancies"
            name="numberOfVacancies"
            value={formData.numberOfVacancies}
            onChange={handleChange}
            placeholder="e.g. 3"
            className="rounded-lg p-3 text-base"
            required
            type="number"
            min="1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description" className="text-base">Job Description (Optional)</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the role and responsibilities"
            className="rounded-lg p-3 text-base min-h-[120px]"
            rows={4}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="skills" className="text-base">Skills</Label>
          <div className="flex gap-2">
            <Input
              id="skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="e.g. React, TypeScript"
              className="rounded-lg p-3 text-base"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSkill();
                }
              }}
            />
            <Button 
              type="button" 
              onClick={handleAddSkill}
              variant="outline"
            >
              Add
            </Button>
          </div>
          
          {formData.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#f2f2f2] px-3 py-1 rounded-full flex items-center gap-2 text-sm"
                >
                  <span>{skill}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-sm hover:text-red-500 ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full mt-6"
          variant="gradient"
          size="talexa"
          disabled={isSubmitting}
        >
          {isSubmitting ? "CREATING..." : "CREATE JOB POSTING"}
        </Button>
      </div>
    </form>
  );
};

export default CreateJobForm;
