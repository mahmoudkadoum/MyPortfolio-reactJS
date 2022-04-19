import React from "react";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import "./ContactMe.css";

const ContactMe = () => { 

  return (
    <div className='ContactMe'>
    {/* <!-- Start Contact Me --> */}
    <div className="contact">
        <img src={images.contact} alt="contact"/>
        <div className="containeer">
            <h2>Contact Me</h2>
            <form>
                <div className="left">
                    <input type="text" placeholder="Your Name" name="username" required />
                    <input type="text" placeholder="Phone" name="Phone" />
                    <input type="email" placeholder="Your Email" name="email" required/>
                    <input type="text" placeholder="Subject" name="subject"/>
                </div>
                <div className="right">
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
    </div>
    {/* <!-- End Contact Me --> */}
    </div>
  );
};
export default ContactMe;
