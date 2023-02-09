import React from "react";
import HeroImg from "../assets/icons_assets/restauranfood.jpg";
import "../style/Hero.css";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero">
        <div className="hero-leftcontainer">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="hero-button">Reserve a table</button>
        </div>
        <div className="hero-rightcontainer">
          <div className="hero-imagebox">
            <img
              className="hero-image"
              src={HeroImg}
              alt="Guy holding food"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
