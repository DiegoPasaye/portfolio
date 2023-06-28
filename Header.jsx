import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useRef } from 'react'
import { Footer } from './Footer';

export const Header = () => {
  const elementoAnimado = useRef(null);
  useEffect(() => {
  ScrollReveal().reveal(elementoAnimado.current, {
    duration: 2000,
    distance: '200px',
    easing: 'ease-out',
    origin: 'bottom'
  });
}, []);

  return (
    <div className='header' ref={elementoAnimado}>
        <h1>Hello! <span>👋</span> I´m Diego.</h1>
        <p className='texto-autoescrito'>Software engineer</p>
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
