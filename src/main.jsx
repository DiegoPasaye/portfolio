import React from 'react'
import ReactDOM from 'react-dom/client'
import { AboutMe } from './AboutMe'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Toolkit } from './Toolkit'
import { Works } from './Works'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='top'>
      <Navigation />  
      <Header />
    </div>

    <Works/>
    <AboutMe />
    <Toolkit />
    <Footer />
  </>
)
