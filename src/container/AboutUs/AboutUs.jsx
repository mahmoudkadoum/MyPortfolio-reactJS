import React from 'react';
import { useState, useEffect } from "react";
import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = () => { 


      useEffect(() => {
  const colorsLi = document.querySelectorAll(".color-list li");
  let mainColors = localStorage.getItem("color_option");
// Function to huo illustration img And BGs color
// Main colors buttons
let btnOneColor = document.querySelector(".color-list li:nth-child(1)").dataset.color;
let btnTwoColor = document.querySelector(".color-list li:nth-child(2)").dataset.color;
let btnThreeColor = document.querySelector(".color-list li:nth-child(3)").dataset.color;
let btnFourColor = document.querySelector(".color-list li:nth-child(4)").dataset.color;
let btnFiveColor = document.querySelector(".color-list li:nth-child(5)").dataset.color;

let bannerImg = document.querySelector(".image-box .bannerBkg");
let aboutUsTextBG = document.querySelector(".about-us .BG");
// let galleryBG = document.querySelector(".gallery .BG"); ------------> Move it to Gallery Container

function huoImg(theColor, theImg) {
    if (theColor == btnOneColor) {
        theImg.style.filter = 'hue-rotate(200deg)';
    } else if (theColor == btnTwoColor) {
        theImg.style.filter = 'hue-rotate(345deg)';
    } else if (theColor == btnThreeColor) {
        theImg.style.filter = 'hue-rotate(300deg)';
    } else if (theColor == btnFourColor) {
        theImg.style.filter = 'hue-rotate(45deg)';
    } else if (theColor == btnFiveColor) {
        theImg.style.filter = 'hue-rotate(120deg)';
    }
}
// // Huo the illustration img color from local storage
if (mainColors !== null) {
    huoImg(mainColors, bannerImg);
    huoImg(mainColors, aboutUsTextBG);
    // huoImg(mainColors, galleryBG);
}
// Huo the illustration img color from colors button
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        huoImg(e.target.dataset.color, bannerImg);
        huoImg(e.target.dataset.color, aboutUsTextBG);
        // huoImg(e.target.dataset.color, galleryBG); ------------> Move it to Gallery Container
    });
});

// About Me Banner Hover Animation

    let bounceContainer = document.querySelector(".bannerText");
    let bounce = document.querySelector(".bounce");
    bounceContainer.addEventListener('mouseover', () => {
        bounce.style.setProperty("animation", "bounce2 1s ease")
        bounce.style.setProperty("-webkit-animation", "bounce2 1s ease")
        bounce.style.setProperty("transform-origin", "50% 100%")
        bounce.style.setProperty("-ms-transform-origin", "50% 100%")
        bounce.style.setProperty("-webkit-transform-origin", "50% 100%")
        bounce.style.setProperty("visibility", "visible !important")
    })
    bounceContainer.addEventListener('mouseleave', () => {
        bounce.style.removeProperty("animation")
        bounce.style.removeProperty("-webkit-animation")
    })
    let bannerPhoto = document.querySelector(".bannerPhoto");
    let bigEntrance = document.querySelector(".bigEntrance");
    bannerPhoto.addEventListener('mouseover', () => {
        bigEntrance.style.setProperty("animation", "bigEntrance 1.5s ease-out")
        bigEntrance.style.setProperty("-webkit-animation", "bigEntrance 1.5s ease-out")
        bigEntrance.style.setProperty("visibility", "visible !important")
    })
    bannerPhoto.addEventListener('mouseleave', () => {
        bigEntrance.style.removeProperty("animation")
        bigEntrance.style.removeProperty("-webkit-animation")
    })
  }, []);


return(
  <div>
        {/* <!-- Start About page--> */}
    <div className="aboutPage">
        <div className='about-us'>
            <div className='BG'></div>
            <div className='info-box'>
                <h2>About Me</h2>
                <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the
                    website more & more interactive with web animations.A responsive design makes your website
                    accessible to all users, regardless of their device.</p>
            </div>
        </div>
        <div className='image-box'>
            <div className='bannerBkg'>
                <div className='banner'>
                    <img src={images.banner_bkg}
                        alt='Web design and development desktop 3D rendering'/>
                    <div className='bannerPhoto'>
                        <img className='bigEntrance' src={images.banner_photo_small}
                            alt='webpage photo box illustration'/>
                    </div>
                    <div className='bannerText'>
                        <img className='bounce' src={images.banner_text_small}
                            alt='webpage text box illustration'/>
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
