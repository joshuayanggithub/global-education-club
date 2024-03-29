import React from "react";
import "/src/styles/Reading.css";

export const Reading = () => {
  return (
    <section id="Reading" className="Reading">
      <div className="reading-info">
        <h1>
          Our <h1 className="reading-emph">Reading</h1> <strong>Program</strong>
        </h1>
        <h2>In-Person This Year!</h2>
        <p>
          In 2022, we had our reading sessions online on Zoom on Saturdays for a
          quick bedtime story from 7:45 to 8:25 PM!{" "}
          <em>
            <b>
              We are proud to say we will be moving back to in-person to the
              same time as tutoring: Thursdays 4:15-5:15!
            </b>
          </em>
        </p>
        {/* <img className="library" src="/library.png" alt="little library"></img> */}
        <h2>Our Plan!</h2>
        <p>
          We will be bringing books upon request from the
          lower-school/upper-school library to read! If your child has a
          favorite book, email us and we will see if we can find a copy so that
          we can read together!
        </p>
      </div>

      <div className="zoom-container">
        <div className="reading-pictures">
          <img src="/Reading_Photo.jpg" />
          <div className="reading-caption">
            <h3>Oct. 2022</h3>
            <h3>GEC Reading Club Photo!</h3>
          </div>
        </div>
      </div>

      <div class="bottom-curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
