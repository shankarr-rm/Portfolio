import React from 'react'
import './Portfolio.css'
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"

const data = [

{
  id: 1,
  image: IMG1,
  title:'Food Delivery Website for SHAN Eats (HTML , CSS , JavaScript , React)',
  github:' https://github.com/shankarr-rm/Food-Delivery.git ',
  demo: 'https://drive.google.com/file/d/1kCwjpg1GsvddAFxCoRFxqn-vG58Vr8tj/view'
},

{
  id: 2,
  image: IMG2,
  title:'The Smart Attendanace System (React JS , CSS , Firebase)',
  github:' https://github.com/shankarr-rm/Smart-Attendance.git ',
  demo: 'https://drive.google.com/file/d/1QnXWZxMTYnsGHC6OILbj_8GRzACMZoAh/view'
},

{
  id: 3,
  image: IMG3,
  title:'Health for Every Heart- SabraCare (React JS , Tailwind CSS)',
  github:' https://github.com/Sanuda3088/SabraCare.git ',
  demo: 'https://sabra-care.vercel.app/'
}

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({id,image,title,github,demo})=>{
          return(
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>
              {id === 3 ? 'Website Link' : 'Live Demo'}
          </a>
          </div>
        </article>
          )
        })}


      </div>
    </section>
  )
}

export default Portfolio