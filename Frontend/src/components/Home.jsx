import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="containerhome d-flex align-items-center justify-content-center">
      <div className="homie text-center">
        <h1 className="mb-4">Welcome to <span className="brand-name">Jobify</span></h1>
        <p className="tagline mb-5">The Perfect Blend of Professional Networking and Creativity</p>
        <div className="sections">
          <div className="section mb-4">
            <h2 className="section-title">Looking for your Dream Job?</h2>
            <p className="section-tagline">Explore opportunities tailored just for you.</p>
            <Link to="/job" className="btn btn-primary section-button">
              Find Jobs
            </Link>
          </div>
          <div className="section">
            <h2 className="section-title">Share Your Journey with the World</h2>
            <p className="section-tagline">Post updates, connect, and grow your network.</p>
            <Link to="/posts" className="btn btn-secondary section-button">
              Explore Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
