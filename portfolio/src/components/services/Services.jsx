import React from 'react'
import './Services.css'
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">


        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">
              <p>
                Crafting exceptional user experiences through intuitive and aesthetically 
                pleasing interfaces. I focus on understanding user needs, wireframing, prototyping, 
                and creating visually engaging designs that ensure seamless interactions and user 
                satisfaction.
              </p>
              <div className="readmore-arrow"><div className="readmore">Read More</div><div className="arrow"><FaArrowRight /></div></div>
          </div>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <div className="service__list">
              <p>
                Building robust, scalable, and responsive websites using the latest technologies. 
                I specialize in both front-end and back-end development, delivering functional and 
                high-performance web solutions tailored to meet your business objectives.
              </p>
              <div className="readmore-arrow"><div className="readmore">Read More</div><div className="arrow"><FaArrowRight /></div></div>
          </div>
        </article>



      </div>
    </section>
  )
}

export default Services