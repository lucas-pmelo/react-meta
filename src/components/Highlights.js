import React from "react";
import "../style/Highlights.css";
import HighlightsCard from "./HighlightsCard";

const Highlights = () => {
  return (
    <div>
      <div className="specials-section-container">
        <div className="specials-section-title">
          <h1>This Week's Specials</h1>
          <div className="btn-container">
            <button className="btn btn-menu hero-button">Online Menu</button>
          </div>
        </div>
        <HighlightsCard />
      </div>
    </div>
  );
};

export default Highlights;
