import React from "react";
import "./skills.css";
import programImage from "./Assests/programming.png"
import Drawing from "./Assests/Drawing.mp4"
import Teaching from "./Assests/teaching.jpg"
import { Link } from "react-router-dom";
export default function Skills() {
  return (
    <div>
      <div className="skill">
        <div className="skill-box">
          <img src={programImage} alt="" />
          <div>Programming Skills</div>
          <button><Link to="/programming">Show more..</Link></button>
        </div>
        <div className="skill-box">
          <video src={Drawing} controls autoPlay></video>
          <div>Drawing Skills</div>
          <button><Link to="/drawing">Show more..</Link></button>
        </div>
        <div className="skill-box">
          <img src={Teaching} alt="" />
          <div>Teaching Skills</div>
          <button>Show more..</button>
        </div>
      </div>
    </div>
  );
}
