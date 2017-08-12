import React, { Component } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'



export default class About extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <h1>About me :)</h1>
      </div>
    )
  }
}
