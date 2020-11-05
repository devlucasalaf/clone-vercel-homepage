import React, { useState } from 'react'
import { HiChevronDown, HiHeart, HiFire, HiMenuAlt4, HiX } from 'react-icons/hi'
import './styless.css'

const Header = () => {

  const [statusScroll, setStatusScroll] = useState(false)
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  setInterval(() => {
    let lastScrollTop = 0
    let scrolled = window.pageYOffset || document.documentElement.scrollTop
    if (scrolled > lastScrollTop) {
      setStatusScroll(true)
    } else {
      setStatusScroll(false)
    }
  }, 1)

  return (
    <div id='header-container'>
      <div id={statusScroll === false ? 'header-wrapper' : 'header-wrapper-scrolled'} >
        <div id='logotipo-element'>
          <a target='blank' href='https://www.linkedin.com/in/lucasalvesafonso/'><span><HiFire /> </span><p>Devluc</p> </a>
        </div>
        <div id={statusScroll === false ? 'menu-content-desktop' : 'menu-content-desktop-hide'} >
          <div className='menu-wrapper' id='solution-wrapper'>
            <a className='menu-links' id='solution-link' href='/'>Projects <span id='down-icon'> <HiChevronDown /> </span></a>
            <div className='hide-info-div'>
              <p className='menu-subinfos'>My life project is help people! <span> <HiHeart /> </span></p>
            </div>
          </div>
          <div className='menu-wrapper' id='resource-wrapper'>
            <a className='menu-links' id='resource-link' href='/'>Team <span id='down-icon'> <HiChevronDown /> </span></a>
            <div className='hide-info-div'>
              <p className='menu-subinfos'>My team is very kind! <span> <HiHeart /> </span></p>
            </div>
          </div>
          <a className='menu-links' id='pricing-link' href='/'>About</a>
        </div>
        <div id='login-elements'>
          <a href='/'>Contact</a>
          <a href='/'>Login</a>
          <a id='signup-btn' href='/'>Sign Up</a>
        </div>
        <button onClick={handleMenu} id='menu-btn'>{open === false ? <HiMenuAlt4 /> : <HiX />}</button>
        <div className={open === false ? 'closedMenu' : 'openedMenu'}>
          <a href='/'>Contact</a>
          <a href='/'>Login</a>
          <a id='signup-btn2' href='/'>Sign Up</a>
          <a href='/'>Projects</a>
          <p>My life project is help people! <span> <HiHeart /> </span></p>
          <a href='/'>Team</a>
          <p>My team is very kind! <span> <HiHeart /> </span></p>
          <a href='/'>About</a>
        </div>
      </div>
    </div>
  )
}

export default Header