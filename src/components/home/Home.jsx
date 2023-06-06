import React from "react";
import "./home.css";
import Card from "../cards/Card";
import Category from "../category/Category";

import Glass1 from "../../assets/glass1.png";
import Glass3 from "../../assets/sunglass3.jpg";
import Glass4 from "../../assets/sunglass4.jpg";

const Home = () => {
  return (
    <div>
      <span className="orange-ball"></span>
      <span className="orange-ball2"></span>

      <div id="hero-section">
        <div className="hero-text">
          <p>
            Stay elegant with <span className="color-green"> classical </span>{" "}
            fashion glasses from GLASSICS.
          </p>
        </div>
        <div className="hero-img">
          <img src={Glass1} alt="" />
        </div>
        <div className="pin">
          <span className="pin1"></span>
          <span className="pin2"></span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <span className="diag-line">
        <p></p>
        <p className="line2"></p>
      </span>

      <section id="banner1">
        <p>
          <marquee
            loop=''
          >
            You don't have to break the bank to look great. We deal affordable
            glasses that rocks!
          </marquee>
        </p>
      </section>

      <section id="category">
        <Category />
      </section>

      <section id="cards-ctn">
        <h2>
          <e>Popular picks</e>
        </h2>
        <div className="cards">
          <Card
            img=''
            title=''
            price=''
            
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <span className="orange-ball3"></span>

      <section className="glasses-history">
        <div className="yg">
  
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />

        <div className="his-img">
          <img src={Glass3} alt="" />
        </div>

        <div className="his-txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            cumque, eum esse illum voluptatibus praesentium adipisci beatae
            error vitae aliquid!
          </p>
        </div>
      </section>
      <section className="glasses-history">
        <div className="his-txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit consequatur
            possimus corrupti animi, quidem rerum beatae minima tenetur dolores
            odio praesentium libero voluptate minus! Temporibus rem quam
          </p>
        </div>
        <div className="his-img">
          <img src={Glass4} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
