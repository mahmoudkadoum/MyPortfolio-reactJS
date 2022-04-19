import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
    const allLinksContainer = useRef();
    
    useEffect(() => {
        const allLinks = allLinksContainer.current.querySelectorAll(".header-area .links .link");
        // Add active class to Links when Hover 
            allLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    //Remove class active from all colors
                    e.target.parentElement.parentElement.querySelectorAll(".active").forEach(element => {
                        element.classList.remove("active");
                    });
                    e.target.classList.add("active");
                });
            })



    }, []);

    return (
        <div className='Navbar'>
            {/* <!-- Start landing page --> */}
                <div className='container'>
                    <div className='header-area'>
                        <div ref={props.logoRef} className='logo'>Mahmoud Kadoum</div>
                        <ul ref={allLinksContainer} className='links'>
                            <li><Link className="link" to="/">Home</Link></li>
                            <li><Link className="link" to="/aboutus">About</Link></li>
                            <li><Link className="link" to="/skills">Skills</Link></li>
                            <li><Link className="link" to="/gallery">Gallery</Link></li>
                            <li><Link className="link" to="/contactme">Contact</Link></li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
export default Navbar;
