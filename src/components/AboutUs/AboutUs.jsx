import React from 'react';
import { useState, useEffect } from "react";
import HuoImgByMainColor from "../../functions/HuoImgByMainColor";
import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = ({huoFilterByBtn}) => { 

// Main colors Settings Set Color from local storage
const [huoFilter, setHuoFilter] = useState('');
useEffect(() => {
    let mainColor = localStorage.getItem("color_option");
    if (mainColor !== null) {
        document.documentElement.style.setProperty('--main-color', mainColor);
        setHuoFilter(HuoImgByMainColor(mainColor));
    }
}, []);

const [bounceHoverStyle, settBounceHoverStyle] = useState({});
const bounceMouseEnter = () => {
    settBounceHoverStyle({
            animation: "bounce2 1s ease",
            webkitAnimation: "bounce2 1s ease",
            transformOrigin: "50% 100%",
            msTransformOrigin: "50% 100%",
            webkitTransformOrigin: "50% 100%",
            visibility: "visible !important",
        })}
const bounceMouseLeave = () => {
    settBounceHoverStyle({
            transformOrigin: "50% 100%",
            msTransformOrigin: "50% 100%",
            webkitTransformOrigin: "50% 100%",
            visibility: "visible !important",
        })}

const [bigEntranceHoverStyle, settBigEntranceHoverStyle] = useState({});
const bigEntranceeMouseEnter = () => {
    settBigEntranceHoverStyle({
            animation: "bigEntrance 1.5s ease-out",
            webkitAnimation: "bigEntrance 1.5s ease-out",
            visibility: "visible !important",
        })}
const bigEntranceMouseLeave = () => {
    settBigEntranceHoverStyle({
            visibility: "visible !important",
        })}

return(
  <div>
        {/* <!-- Start About page--> */}
    <div className="aboutPage">
            <div className='BG'
            style={huoFilterByBtn == undefined  ? {filter:huoFilter,} : {filter:huoFilterByBtn,}}>
            </div>
        <div className='about-us'>
            <div className='info-box'>
                <h2>About Me</h2>
                <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the
                    website more & more interactive with web animations.A responsive design makes your website
                    accessible to all users, regardless of their device.</p>
            </div>
        </div>
        <div className='image-box'>
            <div className='bannerBkg'
            style={huoFilterByBtn == undefined  ? {filter:huoFilter,} : {filter:huoFilterByBtn,}}>
                <div className='banner'>
                    <img src={images.banner_bkg}
                        alt='Web design and development desktop 3D rendering'/>
                    <div className='bannerPhoto'
                    onMouseEnter={bigEntranceeMouseEnter} onMouseLeave={bigEntranceMouseLeave}>
                        <img className='bigEntrance' src={images.banner_photo_small}
                            alt='webpage photo box illustration' style={bigEntranceHoverStyle}/>
                    </div>
                    <div className='bannerText' 
                    onMouseEnter={bounceMouseEnter} onMouseLeave={bounceMouseLeave}>
                        <img className='bounce' src={images.banner_text_small}
                            alt='webpage text box illustration' style={bounceHoverStyle}/>
                    </div>
                    <div className='bannerButton1'>
                        <img className='pop3' src={images.banner_button1_small}
                            alt='webpage button illustration'/>
                    </div>
                    <div className='bannerButton2'>
                        <img className='pop4' src={images.banner_button2_small}
                            alt='webpage button illustration'/>
                    </div>
                    <div className='bannerButton3'>
                        <img className='pop5' src={images.banner_button3_small}
                            alt='webpage button illustration'/>
                    </div>
                    <div className='bannerTree1'>
                        <img className='pop' src={images.tree1_small} alt='tree'/>
                    </div>
                    <div className='bannerTree2'>
                        <img className='pop2' src={images.tree2_small} alt='tree'/>
                    </div>
                    <div className='bannerTree3'>
                        <img className='pop6' src={images.tree3_small} alt='tree'/>
                    </div>
                    <div className='bannerClock'>
                        <img className='rotate3' src={images.clock} alt='clock'/>
                    </div>
                    <div className='bannerClock2'>
                        <img className='rotate4' src={images.clock2} alt='clock'/>
                    </div>

                </div>
                <div className="space"></div>
            </div>
        </div>

    </div>
    {/* <!-- End About page --> */}
  </div>
);

}

export default AboutUs;
