import React from 'react'
import "./Popup.css";


function popup(props) {

  return (props.trigger) ? (
    <>
        <div  className='pageOverlay' onClick={() => props.setTrigger(false)}></div>
            <div className='popup'>
                <h2 className='popupTitele'>{props.Alt}</h2>
                <img src={props.Src} className='popedupImg' />
                <span className='popupCloseBtn' onClick={() => props.setTrigger(false)}>
                    <i className='fa fa-times' aria-hidden='true'></i>
                </span>
            </div>
    </>
  ) : "";
}
export default popup