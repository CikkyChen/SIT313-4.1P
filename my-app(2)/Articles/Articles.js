import React from 'react'
import "./Articles.css";
import img1 from "../Assets/Article1.png";
import img2 from "../Assets/Article2.jpg";
import img3 from "../Assets/Article3.png";

 
export default function Navbar() {
    return (
        <>
        <div className="articles-section">
        <h2>Featured Articles</h2>

       <div className="articles">

        <div className="cards">

            <div className="card-img">

           <img src={img1} alt="react js" />

            </div>

            <div className="card-content">
               <a href=""> <h3>Challenges, opportunities and growth</h3></a>
                <p>This article will explore the challenges and opportunities of college life and how it can help shape individual growth.</p>
                <h4>⭐5 May</h4>
            </div>
        </div>

        <div className="cards">
            <div className="card-img">
            <img src={img2} alt="node js" />
            </div>


            <div className="card-content">
                <a href=""> <h3>Build friendships and fulfill dreams</h3></a>
                <p>This article will explore the multiple facets of college life, from academic to social to personal growth, that have a profound impact on students.</p>
                <h4>⭐4 Sam</h4>
            </div>
        </div>

        <div className="cards">
            <div className="card-img">
            <img src={img3} alt="react hook" />
            </div>

            <div className="card-content">
                 <a href=""> <h3>Discover yourself, explore the world and build your future</h3></a>
                <p>This article will delve into multiple aspects of college life, including academic development, personal growth and social interation, and how they work together to shape a student's future.</p>
                <h4>⭐4.5 Leo</h4>
            </div>
        </div>
       </div>

       <div className="btn">

        <button>See all articles</button>
       </div>
       </div>
        </>
    )

}