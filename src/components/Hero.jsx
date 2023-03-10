import React from 'react'

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className='left-hero'>
        <img src="/hero-vector.svg" alt="vector" />
        <button className="vector-button" >Sign Up!</button>
      </div>
      <div className='right-hero'>
        <img className="Hero-Image" src="src/GEC/Wiliam.jpg"/>
      </div>
    </div>
  )
}
