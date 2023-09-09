import React from "react";
import "/src/styles/Tutoring.css";

export const Tutoring = () => {
  return (
    <section id="Tutoring" className="Tutoring">
      <div className="tutoring-info">
        <h1>
          Our <h1 className="emph">Tutoring</h1> <strong>Program</strong>
        </h1>
        <h2>Why Choose Us?</h2>
        <p>
          As high schoolers, we have all shared the struggles of falling behind
          in schoolwork or understanding everything that is taught in class.
          It's nice for us to help our younger Quarry Lane classmates for a
          change, so that we can give the help or simply company they want/need!
        </p>
        <h2>How We Operate</h2>
        <p>
          Every week on a specific day on a school year, our volunteers meet and
          find tutorees from the lower school building/area.{" "}
          <b>
            <em>
              This 2023/24 school year, we will meet for tutoring sessions on
              Thursdays 4:15-5:15 in the lower school.
            </em>
          </b>
          If the time doesn't work, we also have tutors who schedule times
          outside of this interval with the parents.
        </p>
      </div>
      <div className="picture-container">
        <div className="tutoring-pictures">
          <img src="/Srinitha_Tutoring.jpg" />
          <div className="tutoring-caption">
            <h3>2022/23</h3>
            <h3>Tutoring in Progress!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
