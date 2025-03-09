import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Filter = () => {
  const filters = [
    { id: 1, label: "Location", value: "location" },
    { id: 2, label: "Job Profile", value: "jobProfile" },
    { id: 3, label: "Salary", value: "salary" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleFilterClick = (filterValue) => {
    console.log(`Filter selected: ${filterValue}`);
    setShowModal(true); // Show modal when a filter is clicked
  };

  return (
    <div className="filter-container">
      <h3 className="text-white text-xl px-2">Search By</h3>
      {filters.map((filter) => (
        <p
          key={filter.id}
          className="filter-item text-white cursor-pointer"
          onClick={() => handleFilterClick(filter.value)}
        >
          {filter.label}
        </p>
      ))}

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light">Register</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body bg-dark">
                <form>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
