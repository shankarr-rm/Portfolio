import React from 'react'
import Shankar_CV from '../../assets/Shankar_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Shankar_CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA