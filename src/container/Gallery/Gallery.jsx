import React from "react";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => { 

    useEffect(() => {
// Creat a Popup include Image
{
  let myGallery = document.querySelectorAll(".gallery .imgBox img");
  myGallery.forEach(img => {
      img.addEventListener('click', (e) => {
          let overlay = document.createElement("div");
          overlay.className = 'pageOverlay';
          document.body.appendChild(overlay);
          let popup = document.createElement("div");
          popup.className = "popup";
          document.body.appendChild(popup);
          let popupTitele = document.createElement("h2");
          popupTitele.className = 'popupTitele';
          popupTitele.innerHTML = img.alt;
          popup.appendChild(popupTitele);
          let popedupImg = document.createElement("img");
          popedupImg.setAttribute("src", img.src);
          popup.appendChild(popedupImg);
          popedupImg.className = 'popedupImg';
          let popupCloseBtn = document.createElement("span");
          popupCloseBtn.className = 'popupCloseBtn';
          popupCloseBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
          popup.appendChild(popupCloseBtn);
          overlay.addEventListener('click', (e) => {
              document.body.removeChild(popup)
              document.body.removeChild(overlay)
          })
          popupCloseBtn.addEventListener('click', (e) => {
              document.body.removeChild(popup)
              document.body.removeChild(overlay)
          })
      })
  })
}
}, []);

  return (
    <div className='Gallery'>
    {/* <!-- Start Gallery page --> */}
    <div className='gallery'>
        <div className='BG'></div>
        <div className='container'>
            <h2>My Gallery</h2>
            <div className='imgBox'>
                <img src={images.FurnitureApp1} alt='Furniture APP'/>
                <img src={images.FurnitureApp2} alt='Furniture APP'/>
                <img src={images.WeddingApp1} alt='Wedding APP'/>
                <img src={images.STARCARApp1} alt='STARCAR APP'/>
                <img src={images.FurnitureApp3} alt='Furniture APP'/>
                <img src={images.WeddingApp2} alt='Wedding APP'/>
                <img src={images.STARCARApp2} alt='STARCAR APP'/>
                <img src={images.WeddingApp3} alt='Wedding APP'/>
                <img src={images.STARCARApp3} alt='STARCAR APP'/>
                <img src={images.WeddingApp4} alt='Wedding APP'/>
            </div>
        </div>
    </div>
    {/* <!-- End Gallery page --> */}
    </div>
  );
};
export default Gallery;
