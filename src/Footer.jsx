import React from 'react'
import github from './images/github.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'

export const Footer = () => {
  const openFb = () => {
    window.open("https://www.facebook.com/diegopasaye24", "_blank");
  }
  const openLd = () => {
    window.open("https://www.linkedin.com/in/diegopasaye/", "_blank");
  }
  const openGh = () => {
    window.open("https://github.com/DiegoPasaye", "_blank");
  }
  return (
    <footer id='footer'>
        <div className='connect'>
            <h3>Let´s Connect!</h3>
            <p>If you ever want to have a quick chat - you can find me on social media or you can message me here!</p>
            <div className='footer-icons'>
                <img src={github} alt="github icon" className='github' onClick={openLd}/>
                <img src={facebook} alt="facebook icon" className='facebook' onClick={openFb}/>
                <img src={linkedin} alt="linkedin icon" className='linkedin' onClick={openGh}/>
            </div>
        </div>

        <form action="">
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='name@examenple.com'/>
            <input type="text" placeholder='message'/>
            <button type='submit'>Submit</button>
        </form>
    </footer>
  )
}
