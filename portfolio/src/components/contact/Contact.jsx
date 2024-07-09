import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rmshankarrr@gmail.com</h5>
            <a href="mailto:rmshankarrr@gmail.com">Send a message</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94-77-490-5464</h5>
            <a href="https://api.whatsapp.com/send?phone=+94774905464">Send a message</a>
          </article>

          <article className="contact__option">
            <FaGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>github.com/shankarr-rm</h5>
            <a href="mailto:rmshankarrr@gmail.com">Send a message</a>
          </article>
        </div>

      <div className="form_flex">

      <div className="msg_layout">
      <p className='send_msg'>Send a message directly </p>
      <div className="send_msg_arrow"><FaArrowRight /></div>
      </div>

      <form action="" className='formabc'>
        <div className="row_flex">
        <input type="text" name='f_name' placeholder='Your First Name' required />
        <input type="text" name='l_name' placeholder='Your Last Name' required />
        </div>
        <div className="col_flex">
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </div>
      </form>
      </div>

      </div>
    </section>
  )
}

export default Contact