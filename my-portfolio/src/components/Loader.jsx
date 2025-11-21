import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-inner"></div>
        <div className="loading-text">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
