
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface FormData {
  jobTitle: string;
  minimumExperience: string;
  description: string;
  numberOfVacancies: string;
  skills: string[];
}

const CreateJobForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: "",
    minimumExperience: "",
    description: "",
    numberOfVacancies: "",
    skills: [],
  });
  
  const [skillInput, setSkillInput] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posting created:", formData);
    // Here you would typically send the data to your backend
    alert("Job posting created successfully!");
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
          <Input
            id="minimumExperience"
            name="minimumExperience"
            value={formData.minimumExperience}
            onChange={handleChange}
            placeholder="e.g. 2 years"
            className="rounded-lg p-3 text-base"
            required
          />
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
        >
          CREATE JOB POSTING
        </Button>
      </div>
    </form>
  );
};

export default CreateJobForm;
