import React, { Component } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

export default class NoMatch extends Component {
  render() {
    return (
      <div className=''>
        <TopNav/>
        <div className='no-match'>
          <h1>Oops, there doesn't seem to be anything here...</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
