import React from 'react'
import '/src/styles/Mission.css'

export const Mission = () => {
  return (
    <section id='Mission' className='Mission'>
      <h1 className='mission-title'>Our Mission</h1>
      <div className='mission-writing'>
        <div className='mission-left'>
            <h1>Who Are We?</h1>
            <p>
              We are the Global Education Club (GEC), founded at the Quarry Lane School by  Vivian Hir (Class of 2021) in 2018 to raise awareness for KHEN Cambodia, a NGO organization that focuses on building schools in Battambang Province. Since, then the following generations of club have  extended our goals to promote global education in general through our various programs.
            </p>
        </div>
        <div className='mission-right'>
          <h1>Building Trust</h1>
          <p>
            We have built a sizeable following on social media and also send weekly updates within our club to parents & students make sure we are doing what we are expected to follow.
          </p>
          <h1>Aim</h1>
          <p>
            We strive to promote, develop, and educate our young peers. Quarry Lane is a tight-knit school and as high schoolers sharing the same campus, buildings, and rooms with our younger counterparts, we are looking for ways to support others!
          </p>
        </div>
      </div>
      <img src="/Club_Picture_Cropped.jpg" alt="Club Picture" />
    </section>
  )
}
