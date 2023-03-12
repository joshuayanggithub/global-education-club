import React from 'react'
import '/Rectangle.svg';

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className='left-hero'>
          <img classname="vector" src="/hero-vector.svg" alt="vector" />
        <button className="vector-button" >Sign Up!</button>
      </div>
      <div className='right-hero'>
        <img className="Hero-Image" src="src/GEC/Wiliam.jpg"/>
        <img className='svg-rectangle' src='/Rectangle.svg' />
      </div>
    </div>
  )
}
