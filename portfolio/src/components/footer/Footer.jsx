import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
      <div className='footer'>
  
      <a href="#" className='footer__logo'>SHANKAR MAHENDRAN</a>

      <ul className='permalinks'>
        <li><b><a href="#">Home</a></b></li>
        <li><b><a href="#about">About</a></b></li>
        <li><b><a href="#experience">Experience</a></b></li>
        <li><b><a href="#services">Services</a></b></li>
        <li><b><a href="#portfolio">Portfolio</a></b></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><b><a href="#contact">Contact</a></b></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/rmshankarr" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://instagram.com/shankarr_rm" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
          <small><b>&copy; SHANKAR 2026. All rights reserved</b></small>
      </div>

    </div>
  )
}

export default Footer