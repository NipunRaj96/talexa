
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate a unique job ID
      const jobId = generateUniqueJobId();
      
      // In a real implementation, we would save this to a database
      const jobData = {
        ...formData,
        id: jobId,
        createdAt: new Date().toISOString(),
        status: "active",
        applicants: 0
      };
      
      console.log("Job posting created:", jobData);
      
      // Store job data in localStorage for demonstration purposes
      // In a real app, this would be saved to a database
      const existingJobs = JSON.parse(localStorage.getItem("jobPostings") || "[]");
      localStorage.setItem("jobPostings", JSON.stringify([...existingJobs, jobData]));
      
      // Show success message
      toast("Job posting created successfully!", {
        description: "A unique application link has been generated."
      });
      
      // Navigate to the dashboard with the job ID
      setTimeout(() => {
        navigate(`/dashboard?newJobId=${jobId}`);
      }, 1500);
    } catch (error) {
      console.error("Error creating job posting:", error);
      toast("Failed to create job posting", {
        description: "Please try again.",
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
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
                  className="bg-[#f2f2f2] px-3 py-1 rounded-full flex items-center gap-2"
                >
                  <span>{skill}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-sm hover:text-red-500"
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
