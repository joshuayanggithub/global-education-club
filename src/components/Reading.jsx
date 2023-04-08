import React from 'react'
import '/src/styles/Reading.css'

export const Reading = () => {
  return (
    <section id='Reading' className='Reading'>

      <div className='reading-info'>
        <h1>Our <h1 className='reading-emph'>Reading</h1> <strong>Program</strong></h1>
        <h2>The Little Library</h2>
        <p>
          Our collection of free books online to read to our members from. Always down to add more based on request! This 22/23 year we are operating online on Zoom on Saturdays for a quick bedtime story from 7:45 to 8:25 PM!
          </p>
        <img className='library' src='/src/GEC/library.png' alt='little library'></img>
      </div>

      <div className='zoom-container'>
        <div className='reading-pictures'>
          <img src='/src/GEC/Reading_Photo.jpg'/>
          <div className='reading-caption'>
            <h3>Oct. 2022</h3>
            <h3>Reading Club Photo!</h3>
          </div>
        </div>
      </div>

      <div class="bottom-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
    </div>
  </section>
  )
}
