import React, { Component } from 'react'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'
import resume from '../assets/Neil_K_Resume.png'
import resume_pdf from '../assets/NeilK_Resume.pdf'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='resume-page'>
          <div className='resume'>
            <img className='resume-pic' src={resume} />
          </div>
          <a className='cta-button' href={resume_pdf} download>Download</a>
        </div>
        <Footer />
      </div>

    )
  }
}
