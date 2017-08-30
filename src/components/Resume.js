import React, { Component } from 'react'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'
import resume from '../resumev6.png'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='resume-page'>
          <button className='cta-button' onClick={()=>window.open('http://bit.ly/2wE9JEI', '_blank')}>Download</button>
          <div className='resume'>
            <img className='resume-pic' src={resume} />
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
