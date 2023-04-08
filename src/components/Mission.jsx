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
              Originally founded by  Vivian Hir (Class of ‘2021) in 2018 to fundraise and raise awareness for KHEN Cambodia, a NGO organization that focuses on building schools in Battambang Province, the following generations of the club have since extended our goals to promote global education in general through our various programs.
            </p>
        </div>
        <div className='mission-right'>
          <h1>Building Trust</h1>
          <p>
            It is important to compare yourself to expectations to keep yourself on track. We do exactly that with our media posts and club reminders. 
          </p>
          <h1>Aim</h1>
          <p>
            We strive to promote, develop, and educate our young peers. Quarry Lane is a tight-knit school and as high schoolers, we know the struggle of what it was once like to fall behind on school work or to feel too much stress.
          </p>
        </div>
      </div>
      <img src="/Club_Picture_Cropped.jpg" alt="Club Picture" />
    </section>
  )
}
