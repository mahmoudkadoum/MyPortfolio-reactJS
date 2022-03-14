import React from "react";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import "./Skills.css";

const Skills = () => { 

    useEffect(() => {
        // Function to fill Skills by Animation
{
    let ourSkills = document.querySelector(".skills");
    window.onscroll = function () {
      {
          // Set Side Page Scroll Progress Bar
          let scrollProgressBar = document.querySelector('#scrollProgressBar');
          let totalHeight = document.body.scrollHeight - window.innerHeight;
          let progressHeight = (window.pageYOffset / totalHeight) * 100;
          scrollProgressBar.style.height = progressHeight + "%";
      }
        let skillsTop = ourSkills.getBoundingClientRect().top;
        let windowHeight = this.innerHeight;
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            if (skillsTop >= windowHeight - 150 || skillsTop <= -(windowHeight + 150)) {
                skill.style.width = ("0%");
            } else {
                skill.style.width = skill.dataset.progress;
            }
        });
    };
}
}, []);


  return (
    <div className="skillsPage">
      {/* <!-- Start Our Skills page --> */}
      <div className="skills">
        <div className="container">
          <h2>MY Skills</h2>
          <div className="skill-box">
            <div className="skill-name">HTML</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="95%">95%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">CSS</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="85%">85%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">JavaScript</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="80%">80%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">BootStrab</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="85%">85%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">SASS</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="90%">90%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">VueJS</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="85%">85%</span>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-name">ReactJS</div>
            <div className="skill-progress">
              <div></div>
              <span data-progress="80%">80%</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Skills page --> */}
    </div>
  );
};
export default Skills;
