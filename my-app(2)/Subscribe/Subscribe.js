import React from 'react';
import "./Subscribe.css";

export default function Subscribe() {
    return (

        <>
          <div className="subscribe-container" id='Login'>
              <div className="heading">
                <h2>SIGN UP FOR DAILY INSIDER</h2>

              </div>

              <div className="subscribe-input">

               <input type="text" placeholder='Enter your email' />

              </div>

              <div className="sub">
               <a href='#subscribe' id="item4"><button>Subscribe</button></a>
              </div>

           </div>
       </>
    )
}