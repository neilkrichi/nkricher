import React, { Component } from 'react'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'
import resume from '../resumev7.png'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='resume-page'>
          <div className='resume'>
            <img className='resume-pic' src={resume} />
          </div>
          <button className='cta-button' onClick={()=>window.open('http://bit.ly/2wE9JEI', '_blank')}>Download</button>
        </div>
        <Footer />
      </div>

    )
  }
}
