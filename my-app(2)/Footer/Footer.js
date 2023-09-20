import React from 'react';
import "./Footer.css";
import footer1 from "../Assets/footer1.png";
import footer2 from "../Assets/footer2.png";
import footer3 from "../Assets/footer3.png";


export default function Footer() {
    return (
        <>
          <div className="footer-container" id='footerId'>
              <div className="content-1">
               <div className="sub-content-1">
                   <h2>Explore</h2>
                   <p>Home</p>
                   <p>Questions</p>
                   <p>Articles</p>
                   <p>Tutorials</p>
               </div>

               <div className="sub-content-1">
               <h2>Support</h2>
                   <p>FAQs</p>
                   <p>Help</p>
                   <p>Contact Us</p>
               </div>

               <div className="sub-content-1">

               <h2>Stay Connected</h2>

                   <img src={footer1} alt="" />

                   <img src={footer2} alt="" />

                   <img src={footer3} alt="" />

               </div>

       
              </div>

              <div className="content-2">

               <h2>DEV@Deakin  2023</h2>

               <div className="sub-content-2">

                <p>privacy Poliscy</p>

                <p>Terms</p>

                <p>Code of Conducts</p>

               </div>
              </div>
           </div>
       </>
    )
}