import React from 'react'
import './styles.css'

export const Navigation = () => {
  const burger = () => {
    document.querySelector(".aNavs").classList.toggle("closeMenu")
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
        <div className='aNavs' onClick={burger}>
            <a href="">Projects</a>
            <a href="">About Me</a>
            <a href="">Contact</a>
        </div>
      </nav>
    </>
  )
}
