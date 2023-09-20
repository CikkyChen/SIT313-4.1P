import React from 'react'
import "./Tutorials.css";
import img1 from "../Assets/tutorials1.png";
import img2 from "../Assets/tutorials2.png";
import img3 from "../Assets/tutorials3.jpg";
 

export default function Navbar() {
    return (

        <>
        <div className="tutorial-section" id='Post'>
        <h2>Featured Tutorials</h2>

       <div className="tutorial">

        <div className="cards">

            <div className="card-img">

           <img src={img1} alt="react js" />

            </div>

            <div className="card-content">

                <a href=""><h3>C++ programming: From basic to advanced</h3></a>

                <p>This video will ........</p>

                <h4>username : DavidLu123</h4>

            </div>
        </div>

        <div className="cards">

            <div className="card-img">

            <img src={img2} alt="node js" />

            </div>

            <div className="card-content">

               <a href=""><h3>Python programming: Explore flexibility and practical applications</h3></a>

                <p>This video will ........</p>

                <h4>username : Sam0913</h4>

            </div>

        </div>

        <div className="cards">

            <div className="card-img">

            <img src={img3} alt="react hook" />

            </div>

            <div className="card-content">

                <a href=""><h3>Java Programming: Explore the power of cross-platform development and object orientation</h3></a>

                <p>This video will ........</p>

                <h4>username : book4you</h4>

            </div>

        </div>

       </div>

       <div className="btn">

        <button>See all Tutorials</button>

       </div>

       </div>

        </>

    )

}