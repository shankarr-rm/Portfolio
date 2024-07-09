import React from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
import { PiHandPeace } from "react-icons/pi";

const Nav = () => {
  const [ activeNav, setActiveNav] = useState('#')
  return (
    <div className='navbar'>
    <p className="hiall"><div className="xy"><div className="x">Hii Everyone </div><div className="y"><PiHandPeace /></div></div></p>
    <div className="column">
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}> <div className="ab"><div className="a"> Home</div><div className="b"><AiOutlineHome /></div></div></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}> <div className="ab"><div className="a">About Me </div><div className="b"><AiOutlineUser /></div></div></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}> <div className="ab"><div className="a">Experience </div><div className="b"> <BiBook /></div></div></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}> <div className="ab"><div className="a">Services </div><div className="b"><RiServiceLine /></div></div></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}> <div className="ab"><div className="a">Contact me </div><div className="b"><BiMessageSquareDetail /></div></div></a>
    </div>
    </div>
  )
}

export default Nav




// import React from 'react'
// import './Nav.css'
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { useState } from 'react';


// const Nav = () => {
//   const [ activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome /></a>
//       <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser /></a>
//       <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook /></a>
//       <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine /></a>
//       <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail /></a>
//     </nav>
//   )
// }

// export default Nav