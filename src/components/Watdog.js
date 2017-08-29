import React, { Component } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

export default class Watdog extends Component {
  render() {
    return (
      <div className=''>
        <TopNav/>
        <div className='watdog-page'>
          <h1>Coming soon...</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
