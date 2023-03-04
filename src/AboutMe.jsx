import React from 'react'
import person from './images/profile.svg'

export const AboutMe = () => {
  return (
    <div className='about'>
        <img src={person} alt="me icon" />

        <div>
            <h2>About me</h2>
            <p>Description</p>
        </div>
    </div>
  )
}
