import React from "react";
import "../Education.css";
import EducationLogo from "../images/Education.jpg";
import ditlogo from "../images/Dit-logo.png";
import DegreeCard from "../components/DegreeCard";

const Education = () => {
  return (
    <div className="Main">
      <div className="education">
        <div>
          <img className="education-logo" src={EducationLogo} alt="Education" />
        </div>
        <div className="education-content">
          <h3 className="education-heading">Education</h3>
          <h2 className="education-sub-heading">
            Basic Qualification and Certifications
          </h2>
          <p className="education-para">
            I have studied basic software engineering subjects like DS,
            Algorithms, DBMS, OS, CA, AI etc.
          </p>
        </div>
      </div>
      <div className="Degree">
        <h3 className="Degree-Heading">Degree received</h3>
        <div className="Dit-Details">
          <img className="Dit-logo" src={ditlogo} alt="DIT University" />
          <DegreeCard />
        </div>
      </div>
    </div>
  );
};

export default Education;