import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useRef } from 'react'
import person from './images/profile.svg'

export const AboutMe = () => {
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
    <div className='about' ref={elementoAnimado}>
        <img src={person} alt="me icon" />

        <div>
            <h2>About me</h2>
            <p>Hi, i´m Diego, a IT Enginer Student and Software Developer living in Morelia, Michoacan, i have 18 years old and i live coding.</p>
        </div>
    </div>
  )
}
