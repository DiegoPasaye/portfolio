import React from 'react'
import { Footer } from './Footer';

export const Header = () => {
  return (
    <div className='header'>
        <h1>Hello! 👋 I´m Diego.</h1>
        <p className='texto-autoescrito'>Software enginer</p>
        <p className='header-description'>I build beautiful and interactive pages, writing clean and efficient code.</p>
        <button onClick={() => {
          document.querySelector("#footer").scrollIntoView({behavior: "smooth"});
        }}>Let´s do it</button>
    </div>
  )
}
/*    for(let i = 0; i < 3; i++){
      if(i == 0){
        document.querySelector(".texto-autoescrito2").classList.add("mostrar")
        document.querySelector(".texto-autoescrito").classList.add("ocultar")
        document.querySelector(".texto-autoescrito2").classList.remove("texto-autoescrito")
      }else{
        document.querySelector(".texto-autoescrito2").classList.add("ocultar")
        document.querySelector(".texto-autoescrito").classList.add("mostrar")
        document.querySelector(".texto-autoescrito2").classList.remove("texto-autoescrito2")
        i = 0
      }
    }*/
