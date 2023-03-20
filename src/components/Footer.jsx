import React from 'react'
import '/src/styles/Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {SiLinktree} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


export const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer-text'>©2023 Designed and Created By Joshua Yang</h1>
      <div className='icons'>
        <a href='https://www.instagram.com/qlsglobaleducation/'><BsInstagram size={20} color="black" /></a>
        <a href='https://linktr.ee/qlsglobaleducation'><SiLinktree size={20} color="black" /></a>
        <a href='https://github.com/joshuayanggithub/global-education-club'><BsGithub size={20} color="black" /></a>
      </div>
    </footer>
  )
}
