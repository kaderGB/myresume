import React, { useState } from 'react'
import "./sidebar.css"
import Logo from '../../assets/logo.svg'
const Sidebar = () => {

    const[toggle, showMenu]=useState(false)
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href='#home' className='nav__logo'>
      
         <h1 id='intro_title'>K<span id="intro_span">.</span></h1>
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_items'>
              <a href="#home" className='nav_link'><i className="icon-home"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#about" className='nav_link'><i className="icon-user-following"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#techstack" className='nav_link'><i className="icon-globe"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#services" className='nav_link'><i className="icon-briefcase"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#workwithme" className='nav_link'><i className="icon-energy"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#work" className='nav_link'><i className="icon-grid"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#testi" className='nav_link'><i className="icon-bubble"></i></a>
            </li>

             <li className='nav_items'>
              <a href="#certification" className='nav_link'><i className="icon-badge"></i></a>
            </li>
             <li className='nav_items'>
              <a href="#contact" className='nav_link'><i className="icon-phone"></i></a>
            </li>
          </ul>
        </div>

      </nav>
      <div className="nav_footer">
        <span className="copyright">Made With <i className="icon-heart"></i> </span>
      </div>
    </aside>

    <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle" } onClick={()=> showMenu(!toggle)}>
<i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar;
