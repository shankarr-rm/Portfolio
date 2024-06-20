import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data=[

{
  avatar: AVTR1,
  name:"Tina Snow",
  review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsam aspernatur audantium dignissimos impedit excepturi nihil dolorem vel praesentium molestias ratione, vitae nam illo tempore laboriosam ipsum facere magnam soluta perspiciatis?"
},

{
  avatar: AVTR2,
  name:"Shatta Wale",
  review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsam aspernatur audantium dignissimos impedit excepturi nihil dolorem vel praesentium molestias ratione, vitae nam illo tempore laboriosam ipsum facere magnam soluta perspiciatis?"
},

{
  avatar: AVTR3,
  name:"Kwarne Despite",
  review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsam aspernatur audantium dignissimos impedit excepturi nihil dolorem vel praesentium molestias ratione, vitae nam illo tempore laboriosam ipsum facere magnam soluta perspiciatis?"
},

{
  avatar: AVTR4,
  name:"Nana Ama McBrown",
  review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsam aspernatur audantium dignissimos impedit excepturi nihil dolorem vel praesentium molestias ratione, vitae nam illo tempore laboriosam ipsum facere magnam soluta perspiciatis?"
}
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      className="container testimonials__container"
      // modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                   <img src={avatar}/>
                </div>
               <h5 className="client__name">{name}</h5>
               <small className="client__review">
                  {review}
               </small>
              </SwiperSlide>

            // <div className="container testimonials__container">
            // {
            //   data.map(({avatar,name,review},index)=>{
            //     return(
              // <article key={index} className="testimonial">
              // <div className="client__avatar">
              //   <img src={avatar}/>
              // </div>
              // <h5 className="client__name">{name}</h5>
              // <small className="client__review">
              //   {review}
              // </small>
              // </article>
                         
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials


{/* <article className="testimonial">
<div className="client__avatar">
  <img src={AVTR1} alt="Avator One"/>
</div>
  <h5 className="client__name">Ernest Achiever</h5>
  <small className="client__review">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Ipsam aspernatur laudantium dignissimos impedit excepturi nihil 
    dolorem vel praesentium molestias ratione, vitae nam illo tempore 
    laboriosam ipsum facere magnam soluta perspiciatis?
  </small>
</article>

<article className="testimonial">
<div className="client__avatar">
  <img src={AVTR1} alt="Avator One"/>
</div>
  <h5 className="client__name">Ernest Achiever</h5>
  <small className="client__review">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Ipsam aspernatur laudantium dignissimos impedit excepturi nihil 
    dolorem vel praesentium molestias ratione, vitae nam illo tempore 
    laboriosam ipsum facere magnam soluta perspiciatis?
  </small>
</article>

<article className="testimonial">
<div className="client__avatar">
  <img src={AVTR1} alt="Avator One"/>
</div>
  <h5 className="client__name">Ernest Achiever</h5>
  <small className="client__review">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Ipsam aspernatur laudantium dignissimos impedit excepturi nihil 
    dolorem vel praesentium molestias ratione, vitae nam illo tempore 
    laboriosam ipsum facere magnam soluta perspiciatis?
  </small>
</article>

<article className="testimonial">
<div className="client__avatar">
  <img src={AVTR1} alt="Avator One"/>
</div>
  <h5 className="client__name">Ernest Achiever</h5>
  <small className="client__review">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Ipsam aspernatur laudantium dignissimos impedit excepturi nihil 
    dolorem vel praesentium molestias ratione, vitae nam illo tempore 
    laboriosam ipsum facere magnam soluta perspiciatis?
  </small>
</article> */}
