// Card.js
import React from 'react';
import "./Card.css"; // Import CSS file

const Card = (props) => {
  return (
    <div className="project-card"> {/* Outer container for each project card */}
      <img src={props.imgsrc} alt={props.title} className="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn">View</a> {/* Changed NavLink to anchor tag */}
          <a href={props.source} className="btn">Source</a> {/* Changed NavLink to anchor tag */}
        </div>
      </div>
    </div>
  );
}

export default Card;
