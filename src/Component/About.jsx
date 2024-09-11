import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about">
        <h1>Nice To Meet You</h1>
        <h3>Who am I ?</h3>
        <div className="intro">
          <p>
            “Hi, I’m Shree Krishna Kumar Prajapati. I’m a doing internship at
            SkillPromt.Ltd.Pvt, where I focus on my coding skills and building
            some real heavily Project. I graduated from Godavari Institute of
            Engineering & Technology affilated with Jawaharlal Nehru University,
            Kakinada University and have over one years of experience in the
            field. Outside of work, I’m passionate about sketch Drawing and
            Teaching .
          </p>
          
          <p>
            I'm a web developer specializing in React. I have a strong
            foundation in building dynamic, responsive, and user-friendly web
            applications using React. In addition to React, I'm proficient in
            HTML5, JavaScript, and other front-end technologies like Angular. I
            have experience working on social apps, and I love creating
            innovative, scalable solutions that enhance user experiences. I'm
            always eager to learn new technologies and contribute to impactful
            projects."
          </p>
          <br />
          <p>
            Recently, I created a static social app using React, designed to
            showcase core functionalities like user profiles, post interactions,
            and responsive design. This project highlights my skills in
            component-based development, routing, and static site deployment on
            Vercel. I’m passionate about building efficient, scalable web
            solutions, and this project reflects my focus on creating
            user-friendly and visually engaging applications."
          </p>
          <div style={{textAlign:"center"}}><a href="https://social-app-xi-khaki.vercel.app/">Social App</a></div>
        </div>
      </div>
    </div>
  );
}
