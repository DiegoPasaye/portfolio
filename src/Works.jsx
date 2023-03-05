import React from 'react'
import fylo from './images/fylo-dark-theme.webp'
import social from './images/social-media-dashboard.webp'
import time from './images/tyme-tracking.webp'

export const Works = () => {
  return (
    <div className='works'>
        <h2>My works</h2>

        <div className='work'>
                <img src={fylo} alt="Fylo Dark Theme Project" />
                <div className='text-work'>
                    <h3>Fylo with dark theme</h3>
                    <p>A simple page to display information of a project.</p>
                    <div>
                        <button onClick={()=>{window.open("https://diegopasaye.github.io/fylo-dark-theme/", "_blank")}}>View Page!</button>
                        <button onClick={()=>{window.open("https://github.com/DiegoPasaye/fylo-dark-theme", "_blank")}}>View Code!</button>
                    </div>
                </div>
        </div>

        <div className='work work-center'>
                <img src={social} alt="Social media dashboard image" />
                <div className='text-work'>
                    <h3>Social Media Dashboard</h3>
                    <p>A page for display the stats of a social account.</p>
                    <div>
                        <button onClick={()=>{window.open("https://diegopasaye.github.io/social-media-dashboard/", "_blank")}}>View Page!</button>
                        <button onClick={()=>{window.open("https://github.com/DiegoPasaye/social-media-dashboard", "_blank")}}>View Code!</button>
                    </div>
                </div>
        </div>


        <div className='work'>
                <img src={time} alt="Time tracking image" />
                <div className='text-work'>
                    <h3>Time tracking main</h3>
                    <p>The time what you do use in anythings.</p>
                    <div>
                        <button onClick={()=>{window.open("https://diegopasaye.github.io/time-tracking-main/", "_blank")}}>View Page!</button>
                        <button onClick={()=>{window.open("https://github.com/DiegoPasaye/time-tracking-main", "_blank")}}>View Code!</button>
                    </div>
                </div>
        </div>


    </div>
  )
}
