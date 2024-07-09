import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="introduction">
        <h2>Hello I'm</h2>
        <h1>Shankar Mahendran</h1>
        <h5 className="test_light"> Fullstack Developer</h5>
        <h4 className="caption_about">I'm a full stack developer with a passion for creating dynamic and responsive websites. 
        I bring ideas to life with clean, efficient code and innovative design.</h4>
        <CTA/>
        <HeaderSocials/>
        </div>
  
        <div className="me">
          <img src={ME} alt="" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

      </div>
      
      

    </header>
    
  )
}

export default Header