import React, { Component } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'



export default class Contact extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <h1>Contact me!</h1>
        <Footer />
      </div>
    )
  }
}
