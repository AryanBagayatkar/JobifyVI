import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobName: "",
    companyName: "",
    salary: "",
    location: "",
    description: "",
    skills: "",
    perks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", formData);
      alert("Job added successfully!");
      setFormData({
        jobName: "",
        companyName: "",
        salary: "",
        location: "",
        description: "",
        skills: "",
        perks: "",
      });
    } catch (error) {
      alert("Error adding job: " + error.message);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Create a Job Posting</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label text-capitalize">{key}</label>
            <input
              type="text"
              className="form-control"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;