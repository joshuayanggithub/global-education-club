import React from 'react'
import '/src/styles/Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {SiLinktree, SiGmail} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


export const Footer = () => {
  return (
    <footer id="Footer" className='footer'>
      <div className='site-review'>
        <h1 className='thank-you'>Thank you for supporting us!</h1>

        <div className='footer-links'>
          <a href='#Home'>Home</a>
          <a href='https://linktr.ee/qlsglobaleducation'>Sign Up</a>
        </div>
        <div className='program-links'>
          <a href='#Tutoring'>Tutoring</a>
          <a href='#Reading'>Reading</a>
        </div>
        <div className='about-links'>
          <a href='#Mission'>About Us</a>
        </div>

        <div className='icons'>
          <a href='https://www.instagram.com/qlsglobaleducation/'><BsInstagram className="footer-icon" color="black" /></a>
          <a href='https://linktr.ee/qlsglobaleducation'><SiLinktree className="footer-icon"  color="black" /></a>
          <a href='mailto:qlsglobaleducation@gmail.com'><SiGmail className="footer-icon" color="black"></SiGmail></a>
        </div>
      </div>
      
      <svg className='footer-divider' viewBox='0 0 1500 5'>
        <line x1="0" y1="0" x2="1500" y2="0" stroke='black'/>
      </svg>
      
      <div className='credits'>
        <h1 className='footer-text'>©2023 Designed and Created By Joshua Yang</h1>
        <a href='https://github.com/joshuayanggithub/global-education-club'><BsGithub className="footer-icon" color="black" /></a>
      </div>

    </footer>
  )
}
