import React, { useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Associations = () => {
  const users = [
    { id: 1, name: "Aryan Bagayatkar", profession: "Software Engineer", avatar: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", profession: "Product Manager", avatar: "https://via.placeholder.com/150" },
    { id: 3, name: "Emily Johnson", profession: "UI/UX Designer", avatar: "https://via.placeholder.com/150" },
    { id: 4, name: "Michael Brown", profession: "Data Scientist", avatar: "https://via.placeholder.com/150" },
    { id: 5, name: "Sarah Davis", profession: "Marketing Specialist", avatar: "https://via.placeholder.com/150" },
    { id: 6, name: "James Wilson", profession: "Business Analyst", avatar: "https://via.placeholder.com/150" },
    { id: 7, name: "Laura Martinez", profession: "Web Developer", avatar: "https://via.placeholder.com/150" },
    { id: 8, name: "David Anderson", profession: "DevOps Engineer", avatar: "https://via.placeholder.com/150" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1 className="text-start mb-4">Friends</h1>
      <div className="row g-4">
        {users.map((user) => (
          <div key={user.id} className="col-md-3">
            <div className="card bg-dark text-light text-center shadow-sm h-100 rounded-50">
              <div className="card-body">
                <PersonCircle size={70} />
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text text-light">{user.profession}</p>
                <button className="btn btn-primary" onClick={handleOpenModal}>
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title">Register</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
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
                      onClick={handleCloseModal}
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

export default Associations;
