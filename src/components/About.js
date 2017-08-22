import React, { Component } from 'react'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'



export default class About extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='about-page'>
          <h1>Hello, I'm Neil. Designer and Front-End developer currently living in Vancouver, Canada.</h1>
          <p>I enjoy solving tough problems and creating delightful, user-friendly designs and interfaces. </p>
        </div>
        <Footer />
      </div>
    )
  }
}
