import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Qualification</h5>
              <small>BSc(Hons) in Computing and Information Systems</small>
              {/* Small indicates that this is a secondary information, 
              supporting the primary heading. */}
            </article>

            </div>
            
            <p> 
            Motivated and ambitious Computing Undergraduate having a  strong communication, leadership and problem-solving with a
            strong desire to continuously acquire knowledge with new  technologies. I am seeking an internship opportunity to further
            enhance my academic knowledge, practical skills and to collaborate with industry experts to develop innovative
            projects and to continue my growth in this field
            </p>

            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About