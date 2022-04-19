import React from "react";
import { useState, useEffect, useRef } from "react";
import HuoImgByMainColor from "../../functions/HuoImgByMainColor";
import { images } from "../../constants";
import "./Gallery.css";
import Popup from "./Popup";

const Gallery = ({huoFilterByBtn}) => { 

    const [galleryImgs, setGalleryImgs] = useState([
        { scr:images.FurnitureApp1, alt:'Furniture APP', id: '1' },
        { scr:images.FurnitureApp2, alt:'Furniture APP', id: '2' },
        { scr:images.WeddingApp1, alt:'Wedding APP', id: '3' },
        { scr:images.STARCARApp1, alt:'STARCAR APP', id: '4' },
        { scr:images.FurnitureApp3, alt:'Furniture APP', id: '5' },
        { scr:images.WeddingApp2, alt:'Wedding APP', id: '6' },
        { scr:images.STARCARApp2, alt:'STARCAR APP', id: '7' },
        { scr:images.WeddingApp3, alt:'Wedding APP', id: '8' },
        { scr:images.STARCARApp3, alt:'STARCAR APP', id: '9' },
        { scr:images.WeddingApp4, alt:'Wedding APP', id: '10' },
    ]);

// Main colors Settings Set Color from local storage
const [huoFilter, setHuoFilter] = useState('');
useEffect(() => {
    let mainColor = localStorage.getItem("color_option");
    if (mainColor !== null) {
        document.documentElement.style.setProperty('--main-color', mainColor);
        setHuoFilter(HuoImgByMainColor(mainColor));
    }
}, []);

const [btnPopup, setBtnPopup] = useState(false);
const [popupScr, setPopupScr] = useState(images.FurnitureApp1);
const [popupAlt, setPopupAlt] = useState('Furniture APP');
const handlePopup = (e) => {
    setBtnPopup(true);
    setPopupScr(e.target.src);
    setPopupAlt(e.target.alt);
}
return (
<div className='Gallery'>
    <div className='gallery'>
    <div className='BG' 
    style={huoFilterByBtn == undefined  ? {filter:huoFilter,} : {filter:huoFilterByBtn,}}>
    </div>
    <div className='container'>
        <h2>My Gallery</h2>
        <div className='imgBox'>
            {galleryImgs.map(Img => {
                return (<img src={Img.scr} alt={Img.alt} key={Img.id} onClick={handlePopup}/>);
            })}
            <Popup trigger={btnPopup} setTrigger={setBtnPopup} Src={popupScr} Alt={popupAlt} />
        </div>
    </div>
    </div>

</div>
);
};
export default Gallery;
