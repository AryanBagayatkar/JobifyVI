import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const JobBox = ({ id, jobName, companyName, location, salary }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="job-box-vertical bg-dark text-light p-4 rounded shadow-sm mb-3">
      <div>
        <h5 className="job-title">{jobName}</h5>
        <p className="job-detail">Company: {companyName}</p>
        <p className="job-detail">Location: {location}</p>
        <p className="job-detail">Salary: {salary}</p>
      </div>
      <div className="detail d-flex align-items-center justify-content-between">
        <BsBuildingsFill size={50} />
        <button type="button" className="btn btn-primary" onClick={handleDetailsClick}>
          Details
        </button>
      </div>
    </div>
  );
};

export default JobBox;
