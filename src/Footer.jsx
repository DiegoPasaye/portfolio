import React from 'react'
import github from './images/github.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'

export const Footer = () => {
  return (
    <footer>
        <div className='connect'>
            <h3>Let´s Connect!</h3>
            <p>If you ever want to have a quick chat - you can find me on social media or you can message me here!</p>
            <div className='footer-icons'>
                <img src={github} alt="github icon" />
                <img src={facebook} alt="facebook icon" />
                <img src={linkedin} alt="linkedin icon" />
            </div>
        </div>

        <form action="">
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='name@examenple.com'/>
            <input type="text" placeholder='message'/>
            <button>Submit</button>
        </form>
    </footer>
  )
}
