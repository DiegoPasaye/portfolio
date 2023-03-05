import React from 'react'
import './styles.css'
import burger2 from './images/burger2.svg'
import { AboutMe } from './AboutMe'
import { Footer } from './Footer'
import { Header } from './Header'
import { Toolkit } from './Toolkit'
import { Works } from './Works'

export const Navigation = () => {
  const burger = () => {
    document.querySelector(".burgerIcon").classList.toggle("closeMenu")
    document.querySelector(".mobileMenu").classList.toggle("mostrar")
  }
  return (
    /**👋 */
    <>
    <div className='mobileMenu'>
      <a href="">Projects</a>
      <a href="">About Me</a>
      <a href="">Contact</a>
    </div>

      <nav>
        <span>Diego Pasaye</span>
        <div className='aNavs'>
            <a onClick={()=> {document.querySelector(".works").scrollIntoView({behavior: "smooth"})}}>Projects</a>
            <a onClick={()=> {document.querySelector(".about").scrollIntoView({behavior: "smooth"})}}>About Me</a>
            <a onClick={()=> {document.querySelector("#footer").scrollIntoView({behavior: "smooth"})}}>Contact</a>
        </div>
      </nav>
      <div className='navMobile'>
        <span>Diego Pasaye</span>
        <img className='burgerIcon' src={burger2} alt="burger icon" onClick={burger}/>
      </div>
    </>
  )
}
