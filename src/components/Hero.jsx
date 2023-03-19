import React from 'react'
import '/Rectangle.svg';
import '/src/styles/Hero.css'

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className='left-hero'>
          <div className='call-to-action'>
            <img className="hero-vector" src="/hero-vector.svg" alt="vector" />
            <h1 className='vector-text'>We love tutoring and teaching kids for education and for fun!</h1>
          </div>
        <a href='https://linktr.ee/qlsglobaleducation'><button className="vector-button" >Sign Up!</button></a>
      </div>
      <div className='right-hero'>
        <img className="Hero-Image" src="src/GEC/Wiliam.jpg"/>
        <img className='svg-rectangle' src='/Rectangle.svg' />
      </div>
    </div>
  )
}
