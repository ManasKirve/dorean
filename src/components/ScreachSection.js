import React from "react";
import { Typewriter } from "react-simple-typewriter";

const ScreachSection = ({ searchQuery, onSearchChange }) => {
  return (
    <div>
      <div className="container-fluid padding_top">
        <div className="d-flex justify-content-center">
          <div className="">
            <div className="heigh_for_jerk">
              <h1 className="mainh_head">
                <Typewriter
                  words={["Unlock Free Courses", "Start Learning Now!"]}
                  loop={true}
                  cursor={true}
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1100}
                />
              </h1>
            </div>

            <p className="mb-4 parasecerachsection_size">
              Over 1,000 plus lectures available: free and paid, with
              certificates, on frontend, backend, 11th, 12th, etc
            </p>
            <div>
              <div className="searchss">
                <span className="screach-icons material-symbols-outlined">
                  search
                </span>
                <input
                  className="search-inputs"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreachSection;
