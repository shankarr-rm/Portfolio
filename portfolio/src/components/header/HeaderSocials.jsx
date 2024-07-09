import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { CgMail } from "react-icons/cg";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shankar-rm" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/shankarr-rm" target='blank'><FaGithub/></a>
        <a href="https://gmail.com" target='blank'><CgMail /></a>
    </div>
  )
}

export default HeaderSocials