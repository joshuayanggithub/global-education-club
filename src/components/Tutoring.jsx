import React from 'react'
import '/src/styles/Tutoring.css'

export const Tutoring = () => {
  return (
    <section id='Tutoring' className='Tutoring'>
      <div className='tutoring-info'>
        <h1>Our Tutoring Program</h1>
        <h2>Why Choose Us?</h2>
        <p>
          As high school volunteers, we have all shared the struggles of falling behind in schoolwork or understanding everything that is taught in class without having the support or time to catch up to the teacher. It's nice for us to help our younger classmates for a change, so that we can give the help or simply company they want/need!
          </p>
        <h2>How We Operate</h2>
        <p>
          Every week on a specific day on a school year, our volunteers meet and find tutorees from the lower school building/area. This 2022/23 school year, our tutoring sessions take place on Wednesdays from 3:25 HS club time to 4:10 PM in the lower-school cafeteria. If the time doesn't work, we also have tutors who schedule times outside of this interval with the parents.
        </p>
      </div>
      <div className='picture-container'>
        <div className='tutoring-pictures'>
          <img src='/src/GEC/Srinitha_Tutoring.jpg'/>
          <div className='tutoring-caption'>
            <h3>2022/23</h3>
            <h3>Tutoring in Progress!</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
