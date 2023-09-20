import React from 'react';
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";


export default function Navbar() {
    return (
        <>
        <nav>
          <div className="navbar-container " id='navbarid'>
              <div id="logo">
                  <a href="#home">
                  <h3>DEV@Deakin</h3></a>
              </div>

              <div className="input">
               <span><BsSearch /></span>

               <input type="text" placeholder='Search' />

              </div>

              <div className="list1">

              <ul>

               <a href='#Post' id="item4"><li>Post</li></a>

               <a href='#Login' id="item5"><li>Login</li></a>

         </ul>
              </div>
           </div>
           </nav>
       </>
    )
}