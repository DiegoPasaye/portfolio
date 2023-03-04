import React from 'react'
import html from './images/html.svg'
import css from './images/css.svg'
import javascript from './images/javascript.svg'
import react from './images/react.svg'
import git from './images/git.svg'
import github from './images/github.svg'

export const Toolkit = () => {
  return (
    <div className='toolkit'>
        <h2>My toolkit</h2>

        <div className='toolkit-divs'>
            <div>
                <img src={html} alt="html icon" />
                <p>HTML</p>
            </div>
            <div>
                <img src={css} alt="html icon" />
                <p>CSS</p>
            </div>
            <div>
                <img src={javascript} alt="html icon" />
                <p>JavaScript</p>
            </div>
            <div>
                <img src={react} alt="html icon" />
                <p>React</p>
            </div>
            <div>
                <img src={git} alt="html icon" />
                <p>Git</p>
            </div>
            <div>
                <img src={github} alt="html icon" />
                <p>Github</p>
            </div>
        </div>
    </div>
  )
}
