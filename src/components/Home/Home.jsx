import React from 'react';
import { useState, useEffect, useRef } from "react";
import { images } from '../../constants';
import HuoImgByMainColor from "../../functions/HuoImgByMainColor";
import AboutUs from '../AboutUs/AboutUs';
import ContactMe from '../ContactMe/ContactMe';
import Gallery from '../Gallery/Gallery';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = (props) => {

// Toggel spin class on icon   
const toggelSettingsFaGear = useRef();
const settingsbox = useRef();
const [switchSpin, setSwitchSpin] = useState(false);
const [switchOpen, setSwitchOpen] = useState(false);
const toggelSpinClass = () => {
switchSpin ? setSwitchSpin(false) : setSwitchSpin(true);
switchOpen ? setSwitchOpen(false) : setSwitchOpen(true);
}
useEffect(() => {
    if (switchOpen) {
        settingsbox.current.style.setProperty('background-color', 'rgb(12, 12, 12)');
        props.logoRef.current.style.setProperty('padding-left', '5.5vw');
    } else {
        settingsbox.current.style.setProperty('background-color', '#FFF');
        props.logoRef.current.style.removeProperty('padding-left');
    }
}, [switchOpen])

// Switch Main colors
const [colorBTNs, setColorBTNs] = useState([
    { class:'active', dataColor:'#03A9F4', id: '1' },
    { class:'', dataColor:'#E91E63', id: '2' },
    { class:'', dataColor:'#ff00ff', id: '3' },
    { class:'', dataColor:'#FF9800', id: '4' },
    { class:'', dataColor:'#33b638', id: '5' },
]);

const colorsLiList = useRef();
const [mainColor, setMainColor] = useState(localStorage.getItem("color_option"));

const [huoFilterByBtn, setHuoFilterByBtn] = useState('');
useEffect(() => {
    setHuoFilterByBtn(HuoImgByMainColor(mainColor));
}, [mainColor])

const handelColorsBTNs = (e) => {
        //Set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("color_option", e.target.dataset.color);
        setMainColor(localStorage.getItem("color_option"));
        //Remove class active from all colors
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
}

useEffect(() => {
    // Main colors Settings Set Color from local storage
    if (mainColor !== null) {
        document.documentElement.style.setProperty('--main-color', mainColor);
        // Set active class on current local storage color if it's conssist
        colorsLiList.current.querySelectorAll("li").forEach(li => {
            if (li.dataset.color == mainColor) {
                li.classList.add("active");
            } else {
                li.classList.remove("active");
            }
        });
    }
    }, [])

// Function to scroll To Sections By Nav Bullets 
const navBullts = useRef();
const [Bullets, setBullets] = useState([
    { SectionName:'Home', dataSection:'.landing-page', id: '1' },
    { SectionName:'About', dataSection:'.aboutPage', id: '2' },
    { SectionName:'Skills', dataSection:'.skills', id: '3' },
    { SectionName:'Gallery', dataSection:'.gallery', id: '4' },
    { SectionName:'Contact', dataSection:'.contact', id: '5' },
]);
useEffect(() => {
// Add section Name to Nav Bullets
let allBullet = navBullts.current.querySelectorAll(".bullet");
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
}, []);

// random BG Settings
let optionBox2 = useRef();
let landingPage = useRef();
useEffect(() => {
        let backgrounInterval;
        let backgrounOption = true;
        let randomBGButon = optionBox2.current.querySelectorAll("span");
    randomizeBacgrond();
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
            } else {
                backgrounOption = false;
                clearInterval(backgrounInterval);
            }
        }
    });
    
    // random BG array of imgs
    let imgsArray = [
        `${images.BG01}`, `${images.BG02}`,
        `${images.BG03}`, `${images.BG04}`,
        `${images.BG05}`, `${images.BG06}`,
        `${images.BG07}`, `${images.BG08}`];
    // random BG Interval
    function randomizeBacgrond() {
        if (backgrounOption === true) {
            backgrounInterval = setInterval(() => {
                // Get random number
                let randomNumber = Math.floor(Math.random() * imgsArray.length);
                // Change background img Url
                landingPage.current.style.backgroundImage = 'url("' + imgsArray[randomNumber] + '")'
            }, 10000);
        }
    };
}, []);

// Function to fill Skills by Animation
const scrollProgressBar = useRef(null);
const ourSkills= useRef();
const allSkillsContainer = useRef();
useEffect(() => {
window.onscroll = function () {
    if (ourSkills.current != null) {
        // Set Side Page Scroll Progress Bar
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        scrollProgressBar.current.style.height = progressHeight + "%";
    
    const skillsTop = ourSkills.current.offsetTop;
    const scrollPosition = document.documentElement.scrollTop;
    
    const allSkills = allSkillsContainer.current.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
        if (scrollPosition >= skillsTop - 400 && scrollPosition <= skillsTop + 600) {
            skill.style.width = skill.dataset.progress;
        } else {
            skill.style.width = ("0%");
        }
    });
}
};
}, []);

return (
<div className='home'>
{/* <!-- Start Custom  Page Scroll Progress Bar --> */}
<div ref={scrollProgressBar} id='scrollProgressBar'></div>
<div id='scrollPath'></div>
{/* <!-- End Custom  Page Scroll Progress Bar --> */}
{/* <!-- Start settings pox --> */}
<div className={switchOpen ? "settings-box open" : "settings-box"}>
    <div ref={settingsbox} className='toggel-settings'>
        <i ref={toggelSettingsFaGear}
        className={switchSpin ? "fa fa-gear fa-spin" : "fa fa-gear"}
        onClick={toggelSpinClass}>
        </i>
    </div>
    <div className='settings-contianer'>
        <div className='option-box'>
            <h4>Colors</h4>
            <ul ref={colorsLiList} className='color-list '>
                {colorBTNs.map(BTN => {
                return (<li className={BTN.class} onClick={handelColorsBTNs} data-color={BTN.dataColor} key={BTN.id}></li>);
                })}
            </ul>
        </div>
        <div ref={optionBox2} className='option-box'>
            <h4>Random Backgrounds</h4>
            <span className='yes active' data-background='yes'>Yes</span>
            <span className='no' data-background='no'>No</span>
        </div>
    </div>
</div>
{/* <!-- End settings pox --> */}
{/* <!-- Start Nav Bullets --> */}
<div ref={navBullts} className='navBullets'>
    {Bullets.map(bullet => {
        return (
        <div className='bullet' data-section={bullet.dataSection}
        id={bullet.SectionName} key={bullet.id}></div>
        );
    })}
</div>
{/* <!-- End Nav Bullets --> */}
{/* <!-- Start landing page --> */}
<div ref={landingPage} className='landing-page'>
    <div className='overlay'></div>
    <div className='introduction-text'>
        <h1>Welcome to my <span>Portfolio</span></h1>
        <p>I design and code beautifully simple things, and I love what I do</p>
    </div>
</div>
{/* <!-- End landing page --> */}
<AboutUs huoFilterByBtn={huoFilterByBtn} />
<Skills ourSkillsRef={ourSkills} allSkillsRef={allSkillsContainer} />
<Gallery huoFilterByBtn={huoFilterByBtn}/>
<ContactMe />
</div>
);
}
export default Home;
