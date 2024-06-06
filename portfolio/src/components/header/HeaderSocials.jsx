import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        {/* target- blank ensures that linkedin will open in a newtab */}
        <a href="https://github.com" target='blank'><FaGithub/></a>
        <a href="https://dribble.com" target='blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials