import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="icons_react">
        <div className="icon1">
      <FaHtml5 />
      <IoLogoCss3 />
      <RiJavascriptFill />
      <FaReact />
      <SiSpringboot />
      <SiMysql />
      </div>
      
      <div className="icon2">
      <SiPostman />
      <FaTrello />
      <FaFigma />
      <FaGithub />
      </div>

      </div>

      {/* frontend */}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>       
          </div>
        </div>

        {/* Tools */}
            
        <div className="experience__tools">
        <h3>Tools</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Postman</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Git , Github</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Trello</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Figma</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

        </div>

        {/* Backend */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          
        </div>


        {/* Programming */}

        <div className="experience__programming">
        <h3>Programming Languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java Programming</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C Programming</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>        
        </div>

      </div>
    </section>
  )
}

export default Experience