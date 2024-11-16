import React from "react";
import "../DegreCard.css";

const DegreeCard = () => {
  return (
    <div className="DegreeCard">
      <div className="upper">
        <h3 className="upper-heading">DIT University, Dehradun</h3>
        <h4 className="upper-heading">B.Tech. in Computer Engineering</h4>
        <h5 className="upper-heading year">2014-2020</h5>
      </div>
      <div className="lower">
        I have studied basic software engineering subjects like DS, Algorithms,
        DBMS, OS, CA, AI etc.
      </div>
      <button onClick={() => window.open("https://www.dituniversity.edu.in/", "_blank")}>
        Visit Website
      </button>
    </div>
  );
};

export default DegreeCard;
