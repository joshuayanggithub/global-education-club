import React from "react";
import "/src/styles/Reading.css";

export const Reading = () => {
  return (
    <section id="Reading" className="Reading">
      <div className="reading-info">
        <h1>
          Our <h1 className="reading-emph">Reading</h1> <strong>Program</strong>
        </h1>
        <h2>Connecting Two Campuses</h2>
        <p>Separated into Dublin East & Dublin West campus, we strive to connect volunteers from our Upper School (9-12) to our younger counterparts at (JK-2) online via virtual reading sessions!</p>
        {/* <img className="library" src="/library.png" alt="little library"></img> */}
        <h2>Our Plan!</h2>
        <p>The Little Library is what we call our compilation of online interactive stories! Sign up today by emailing us to add to our group chat!</p>
      </div>

      <div className="zoom-container">
        <div className="reading-pictures">
          <img src="/Reading Photo.png" />
          <div className="reading-caption">
            <h3>Feb. 2024</h3>
            <h3>GEC Reading Club Photo!</h3>
          </div>
        </div>
      </div>

      <div class="bottom-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};
