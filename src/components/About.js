import React, { Component } from 'react'
import Parallax from 'react-springy-parallax'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'



export default class About extends Component {

  render() {
    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
  }

    return (
      <div>
        <TopNav />
        <h1>About me :)</h1>
        <Footer />
      </div>
    )
  }
}
