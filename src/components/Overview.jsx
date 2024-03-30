import React from "react";
import "/src/styles/Overview.css";
import { FcReading } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";

export const Overview = () => {
  return (
    <section id="Overview" className="overview">
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <h1>Our Programs</h1>
      <p>An overview </p>

      <svg class="plane" width="378" height="311" viewBox="0 0 378 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M327.058 153.408L320.467 171.632M327.058 153.408L346.969 174.704C348.342 175.25 349.715 174.34 350.127 172.702L374.981 117.186C375.393 115.366 374.707 113.546 373.471 113L290.12 142.487C289.708 144.307 290.394 146.127 291.63 146.673L320.467 150.132M327.058 153.408L374.26 115.048L320.467 150.132M320.467 171.632L331.989 158.681M320.467 171.632V150.132"
          stroke="#EAE197"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M325.811 162.176C244.974 303.318 144.657 76.8866 93.4379 46.5182C42.2191 16.1497 122.225 363.506 46.5485 289.117C21.5288 264.523 -2.87183 221.651 -2.87183 221.651"
          stroke="black"
          stroke-dasharray="4 4"
        />
      </svg>

      <div className="three-column">
        <a href="#Reading" className="overview-links">
          <div className="reading">
            <h1>Reading</h1>
            <p>Every Saturday, our Quarry Lane/GEC volunteers, from 7:30 PM to 8:15 PM read books and stories to younger students K-5.</p>
            <FcReading className="overview-icon" />
          </div>
        </a>

        <a href="#Tutoring" className="overview-links">
          <div className="tutoring">
            <h1>Tutoring</h1>
            <p>Every week, our Quarry Lane/GEC volunteers, currently on Thursdays from 4:15 to 5:15 PM (combined with reading), tutor kids on various subjects & help them out with schoolwork!</p>
            <FaHandsHelping className="overview-icon" color="#f3d945" />
          </div>
        </a>

        <a href="#Mission" className="overview-links">
          <div className="projects">
            <h1>Other Projects</h1>
            <p>We are always participating in local outreach or partnering with other non-profit organizations/ clubs to support our mission of empowering education such as ALP!</p>
            <BsFillHouseHeartFill className="overview-icon" color="#f34b45" />
          </div>
        </a>
      </div>

      <div class="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};
