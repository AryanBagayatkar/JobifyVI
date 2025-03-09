import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonCircle } from 'react-bootstrap-icons';
import { FiPaperclip } from "react-icons/fi";
import { Link }from "react-router-dom";

const Profile = () => {

  // Experience State
  const [experiences, setExperiences] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    role: '',
    duration: '',
    description: '',
  });
  const [experienceEditIndex, setExperienceEditIndex] = useState(null);

  // Education State
  const [educations, setEducations] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    duration: '',
    description: '',
  });
  const [educationEditIndex, setEducationEditIndex] = useState(null);
  // Handlers for Experiences
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveExperience = () => {
    if (experienceEditIndex !== null) {
      setExperiences((prev) =>
        prev.map((exp, index) =>
          index === experienceEditIndex ? currentExperience : exp
        )
      );
      setExperienceEditIndex(null);
    } else {
      setExperiences((prev) => [...prev, currentExperience]);
    }
    setCurrentExperience({ company: '', role: '', duration: '', description: '' });
  };

  const handleEditExperience = (index) => {
    setExperienceEditIndex(index);
    setCurrentExperience(experiences[index]);
  };

  const handleDeleteExperience = (index) =>
    setExperiences((prev) => prev.filter((_, i) => i !== index));

  // Handlers for Education
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEducation = () => {
    if (educationEditIndex !== null) {
      setEducations((prev) =>
        prev.map((edu, index) =>
          index === educationEditIndex ? currentEducation : edu
        )
      );
      setEducationEditIndex(null);
    } else {
      setEducations((prev) => [...prev, currentEducation]);
    }
    setCurrentEducation({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      duration: '',
      description: '',
    });
  };

  const handleEditEducation = (index) => {
    setEducationEditIndex(index);
    setCurrentEducation(educations[index]);
  };

  const handleDeleteEducation = (index) =>
    setEducations((prev) => prev.filter((_, i) => i !== index));

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [editSkillIndex, setEditSkillIndex] = useState(null);

  // Handlers for Skills
  const handleSkillInputChange = (e) => setSkillInput(e.target.value);

  const handleAddOrUpdateSkill = () => {
    if (editSkillIndex !== null) {
      // Update existing skill
      setSkills((prev) =>
        prev.map((skill, index) =>
          index === editSkillIndex ? skillInput.trim() : skill
        )
      );
      setEditSkillIndex(null);
    } else {
      // Add new skill
      setSkills((prev) => [...prev, skillInput.trim()]);
    }
    setSkillInput("");
  };

  const handleEditSkill = (index) => {
    setEditSkillIndex(index);
    setSkillInput(skills[index]);
  };

  const handleDeleteSkill = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
    if (editSkillIndex === index) {
      setEditSkillIndex(null);
      setSkillInput("");
    }
  };

  return (
    <div className="container mt-5">
      {/* Profile Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h1 className="profile-name">Siddhi Gharat</h1>
          <p className="profile-details">
            <strong>Skills:</strong> JavaScript, React, Node.js, MongoDB <br />
            <strong>Education:</strong> BE. in Computer Engineering
          </p>
        </div>
        <div className="col-md-4 text-center">
          <div className="profile-pic-container">
            <PersonCircle size={100} />
          </div>
        </div>
      </div>
      {/* Manage Experiences */}
      <h2>Experiences</h2>
      <div className="card p-3 mb-4 bg-dark text-light">
        <input
          type="text"
          name="company"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Company Name"
          value={currentExperience.company}
          onChange={handleExperienceChange}
        />
        <input
          type="text"
          name="role"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Role/Title"
          value={currentExperience.role}
          onChange={handleExperienceChange}
        />
        <input
          type="text"
          name="duration"
          className="form-control mb-2 bg-secondary text-light2"
          placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
          value={currentExperience.duration}
          onChange={handleExperienceChange}
        />
        <textarea
          name="description"
          className="form-control mb-2 bg-secondary text-light"
          rows="3"
          placeholder="Description"
          value={currentExperience.description}
          onChange={handleExperienceChange}
        />
        <button
          className="btn btn-primary"
          onClick={handleSaveExperience}
          disabled={
            !currentExperience.company.trim() ||
            !currentExperience.role.trim() ||
            !currentExperience.duration.trim()
          }
        >
          {experienceEditIndex !== null ? 'Update Experience' : 'Add Experience'}
        </button>
      </div>
      <ul className="list-group">
        {experiences.map((exp, index) => (
          <li key={index} className="list-group-item">
            <h5>{exp.role}</h5>
            <p>Company: {exp.company}</p>
            <p>Duration: {exp.duration}</p>
            <p>Description: {exp.description}</p>
            <button
              className="btn btn-secondary btn-sm ms-3"
              onClick={() => handleEditExperience(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => handleDeleteExperience(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Manage Education */}
      <h2>Education</h2>
      <div className="card p-3 mb-4 bg-dark">
        <input
          type="text"
          name="institution"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Institution Name"
          value={currentEducation.institution}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="degree"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Degree"
          value={currentEducation.degree}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="fieldOfStudy"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Field of Study"
          value={currentEducation.fieldOfStudy}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="duration"
          className="form-control mb-2 bg-secondary text-light"
          placeholder="Duration (e.g., 2015 - 2019)"
          value={currentEducation.duration}
          onChange={handleEducationChange}
        />
        <textarea
          name="description"
          className="form-control mb-2 bg-secondary text-light"
          rows="3"
          placeholder="Description"
          value={currentEducation.description}
          onChange={handleEducationChange}
        />
        <button
          className="btn btn-primary"
          onClick={handleSaveEducation}
          disabled={
            !currentEducation.institution.trim() ||
            !currentEducation.degree.trim() ||
            !currentEducation.duration.trim()
          }
        >
          {educationEditIndex !== null ? 'Update Education' : 'Add Education'}
        </button>
      </div>
      <ul className="list-group">
        {educations.map((edu, index) => (
          <li key={index} className="list-group-item">
            <h5>{edu.degree}</h5>
            <p>Institution: {edu.institution}</p>
            <p>Field of Study: {edu.fieldOfStudy}</p>
            <p>Duration: {edu.duration}</p>
            <p>Description: {edu.description}</p>
            <button
              className="btn btn-secondary btn-sm ms-3"
              onClick={() => handleEditEducation(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => handleDeleteEducation(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Profile Section */}
      <div className="row align-items-center mb-2">
         {/* Skills Section */}
      <h2>Skills</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-secondary text-light mb-2"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={handleSkillInputChange}
        />
        <button
          className="btn btn-primary "
          onClick={handleAddOrUpdateSkill}
          disabled={!skillInput.trim()}
        >
          {editSkillIndex !== null ? "Update Skill" : "Add Skill"}
        </button>
      </div>
      <ul className="list-group">
        {skills.map((skill, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {skill}
            <div>
              <button
                className="btn btn-secondary btn-sm me-2"
                onClick={() => handleEditSkill(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteSkill(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="createjob my-3">
        <div className="btn btn-primary mx-2"><Link className='text-white text-decoration-none' to="/add-job">Create Job Listing</Link></div>
        <div className="btn btn-primary mx-2"><Link className='text-white text-decoration-none' to="/create-post">Create Post</Link></div>
      </div>
    </div>
  );
};

export default Profile;
