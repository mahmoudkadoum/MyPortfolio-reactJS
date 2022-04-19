import React, { useRef, useState, useEffect } from "react";
import "./Skills.css";

const Skills = (props) => { 
  const [skills, setSkills] = useState([
    { skillName:'HTML', skillProgress:'95%', id: '1' },
    { skillName:'CSS', skillProgress:'90%', id: '2' },
    { skillName:'JavaScript', skillProgress:'90%', id: '3' },
    { skillName:'ReactJS', skillProgress:'85%', id: '4' },
    { skillName:'BootStrab', skillProgress:'90%', id: '5' },
    { skillName:'SASS', skillProgress:'85%', id: '6' },
    { skillName:'VueJS', skillProgress:'70%', id: '7' },
]);

  return (
    <div className="skillsPage">
      <div ref={props.ourSkillsRef} className="skills">
        <div ref={props.allSkillsRef} className="container">
          <h2>MY Skills</h2>
          {skills.map(skill => {
              return (
                <div key={skill.id} className="skill-box">
                  <div className="skill-name">{skill.skillName}</div>
                  <div className="skill-progress">
                    <div></div>
                    <span data-progress={skill.skillProgress} style={{width: `${skill.skillProgress}`}}>
                      {skill.skillProgress}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
