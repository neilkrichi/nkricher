import React, { Component } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

export default class Watdog extends Component {
  render() {
    return (
      <div className=''>
        <TopNav/>
        <div className='vision-page'>
          <h1>Watdog</h1>
          <h2>Image Recognition App in React Native</h2>
          <h4>Coming soon...</h4>
        </div>
        <Footer />
      </div>
    )
  }
}
