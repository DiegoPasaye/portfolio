import React from 'react'
import person from './images/profile.svg'

export const AboutMe = () => {
  return (
    <div className='about'>
        <img src={person} alt="me icon" />

        <div>
            <h2>About me</h2>
            <p>Hi, i´m Diego, a IT Enginer Student and Software Developer living in Morelia, Michoacan, i have 18 years old and i live coding.</p>
        </div>
    </div>
  )
}
