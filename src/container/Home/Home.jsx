import React from 'react';
import { useState, useEffect } from "react";
import { OnScroll } from '../../components';
import { images } from '../../constants';
import './Home.css';

const Home = () => {

    // Toggel spin class on icon 
    const toggelSpinClass = () => {
        document.querySelector(".toggel-settings .fa-gear").classList.toggle("fa-spin");
        if (document.querySelector(".toggel-settings .fa-gear").classList.contains("fa-spin")) {
            document.querySelector(".settings-box .toggel-settings").style.setProperty('background-color', 'rgb(12, 12, 12)');
            document.querySelector(".header-area .logo").style.setProperty('padding-left', '5.5vw');
        } else {
            document.querySelector(".settings-box .toggel-settings").style.setProperty('background-color', '#FFF');
            document.querySelector(".header-area .logo").style.removeProperty('padding-left');
        }
        document.querySelector(".settings-box").classList.toggle("open");
    }


    useEffect(() => {
        // Function to fill Skills by Animation
{
    let ourSkills = document.querySelector(".skills");
    // Funcction to Set Side Page Scroll Progress Bar
    window.onscroll = function () {
            let scrollProgressBar = document.querySelector('#scrollProgressBar');
            let totalHeight = document.body.scrollHeight - window.innerHeight;
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            scrollProgressBar.style.height = progressHeight + "%";
    };
}
        // Function to scroll To Sections 
        // Add section Name to Nav Bullets
        let allBullet = document.querySelectorAll(".navBullets .bullet");
        allBullet.forEach(bullet => {
            let sectionName = bullet.id;
            bullet.style.setProperty('--section-name', `'${sectionName}'`);
        })
        function scrollToSection(elements) {
            elements.forEach(ele => {
                let section = ele.dataset.section;
                ele.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelector(section).scrollIntoView({
                        behavior: 'smooth'
                    })
                })
            })
        }
        // scroll To Sections by Bulets
        scrollToSection(allBullet);
        // scroll To Sections by linkks
        let links = document.querySelectorAll(".header-area .links a");
        scrollToSection(links);
        // Add active class to Links when Hover 
        {
            links.forEach(link => {
                link.addEventListener('mouseover', (e) => {
                    e.target.classList.add("active");
                })
                link.addEventListener('mouseleave', (e) => {
                    e.target.classList.remove("active");
                })
            })
        }
        // Main colors Settings Set Color from local storage
        let mainColors = localStorage.getItem("color_option");
        if (mainColors !== null) {
            document.documentElement.style.setProperty('--main-color', mainColors);
            // Set active class on current local storage color if it's conssist
            document.querySelectorAll(".color-list li").forEach(li => {
                if (li.dataset.color == mainColors) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");
                }
            });
        }
        // Switch Main colors by colors BTNs
        const colorsLi = document.querySelectorAll(".color-list li");
        colorsLi.forEach(li => {
            // Click on every list items
            li.addEventListener("click", (e) => {
                //Set color on root
                document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
                localStorage.setItem("color_option", e.target.dataset.color);
                //Remove class active from all colors
                e.target.parentElement.querySelectorAll(".active").forEach(element => {
                    element.classList.remove("active");
                });
                e.target.classList.add("active");
            });
        });

        // random BG Settings
        let backgrounInterval;
        let backgrounOption = true;
        randomizeBacgrond();
        let randomBGButon = document.querySelectorAll(".option-box:nth-child(2) span");
        randomBGButon.forEach(btn => {
            btn.addEventListener("click", (e) => {
                //Set radom background setting on localstorage
                localStorage.setItem("random_background", e.target.dataset.background);
                //Remove class active from other button
                e.target.parentElement.querySelector(".active").classList.remove("active");
                //Add class active to the button
                e.target.classList.add("active");
                // Set random BG Interval Settings by butons
                if (e.target.dataset.background === 'yes') {
                    if (backgrounOption !== true) {
                        backgrounOption = true;
                        randomizeBacgrond();
                    }
                } else {
                    if (backgrounOption !== false) {
                        backgrounOption = false;
                        clearInterval(backgrounInterval);
                    }
                }
            });
            // Check if there's local storage randomBG Option
            let randomBG = localStorage.getItem("random_background");
            if (randomBG !== null) {
                // Set active class on current local storage random_background if it's conssist
                if (btn.dataset.background == randomBG) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
                // Set random BG Interval Settings from local storage if it's conssist
                if (randomBG === 'yes') {
                    backgrounOption = true;
                    // randomizeBacgrond();
                } else {
                    backgrounOption = false;
                    clearInterval(backgrounInterval);
                }
            }
        });
        // random BG array of imgs
        // Select Landing Page
        let landingPage = document.querySelector(".landing-page")
        // Get array of imgs
        let imgsArray = [`${images.BG01}`, `${images.BG02}`, `${images.BG03}`, `${images.BG04}`, `${images.BG05}`, `${images.BG06}`, `${images.BG07}`, `${images.BG08}`];
        // random BG Interval
        function randomizeBacgrond() {
            if (backgrounOption === true) {
                backgrounInterval = setInterval(() => {
                    // Get random number
                    let randomNumber = Math.floor(Math.random() * imgsArray.length);
                    // Change background img Url
                    landingPage.style.backgroundImage = 'url("' + imgsArray[randomNumber] + '")'
                }, 10000);
            }
        };
    }, []);

    return (
        <div className='home'>
            {/* <!-- Start Custom  Page Scroll Progress Bar --> */}
            <div id='scrollProgressBar'></div>
            <div id='scrollPath'></div>
            {/* <!-- End Custom  Page Scroll Progress Bar --> */}

            {/* <!-- Start settings pox --> */}
            <div className='settings-box'>
                <div className='toggel-settings'>
                    <i className='fa fa-gear' onClick={toggelSpinClass}></i>
                </div>
                <div className='settings-contianer'>
                    <div className='option-box'>
                        <h4>Colors</h4>
                        <ul className='color-list '>
                            <li className='active' data-color='#03A9F4'></li>
                            <li data-color='#E91E63'></li>
                            <li data-color='#ff00ff'></li>
                            <li data-color='#FF9800'></li>
                            <li data-color='#33b638'></li>
                        </ul>
                    </div>
                    <div className='option-box'>
                        <h4>Random Backgrounds</h4>
                        <span className='yes active' data-background='yes'>Yes</span>
                        <span className='no' data-background='no'>No</span>
                    </div>
                </div>
            </div>
            {/* <!-- End settings pox --> */}

            {/* <!-- Start Nav Bullets --> */}
            <div className='navBullets'>
                <div className='bullet' data-section='.landing-page' id='Home'></div>
                <div className='bullet' data-section='.about-us' id='About'></div>
                <div className='bullet' data-section='.skills' id='Skills'></div>
                <div className='bullet' data-section='.gallery' id='Gallery'></div>
                <div className='bullet' data-section='.contact' id='Contact'></div>
            </div>
            {/* <!-- End Nav Bullets --> */}

            {/* <!-- Start landing page --> */}
            <div className='landing-page'>
                <div className='overlay'></div>
                <div className='container'>
                    <div className='header-area'>
                        <div className='logo'>Mahmoud Kadoum</div>
                        <ul className='links'>
                            <li><a href='#' data-section='.landing-page'>Home</a></li>
                            <li><a href='#' data-section='.about-us'>About</a></li>
                            <li><a href='#' data-section='.skills'>Skills</a></li>
                            <li><a href='#' data-section='.gallery'>Gallery</a></li>
                            <li><a href='#' data-section='.contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='introduction-text'>
                    <h1>Welcome to my <span>Portfolio</span></h1>
                    <p>I design and code beautifully simple things, and I love what I do</p>
                </div>
            </div>
            {/* <!-- End landing page --> */}
        </div>
    );
}
export default Home;
