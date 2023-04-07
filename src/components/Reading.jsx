import React from 'react'
import '/src/styles/Reading.css'

export const Reading = () => {
  return (
    <section className='Reading'>

      <div className='left-reading'>
        <h1 className='reading-title'>Our Reading Program</h1>

        <div className='little-library'>
          <h2>The Little Library</h2>
          <p>
            Our collection of free books online to read to our members from. Always down to add more based on request!
          </p>
          <img src='/src/GEC/library.png' alt='little library'/>
        </div>

      </div>

      <div className='right-reading'>
        <img src='/src/GEC/Reading_Photo.jpg' alt='reading zoom'/>
        <p>Although it is online this year, we will move it to in-person as it was in the previous years. Below are some photos from the reading program as the years go by.</p>
      </div>

    </section>
  )
}
