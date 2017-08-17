import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import TypeOut from 'react-typeout';

import TopNav from './TopNav'
import Footer from './Footer'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';

const words = ['a creative', 'an enthusiastic', 'an adventurous', 'a passionate'];


export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="intro-text">
          <h1>Welcome,</h1> <br/>
          <h3 className="app-intro">
            My name is Neil and I am <span className='typewriter'><TypeOut words={words} typeSpeed={150} /></span> designer and developer.
          </h3> <br/>
        <button className="cta-button"><Link to='/projects'>Let's see what you got, Neil</Link></button>
        </div>
        <Footer />
      </div>

  );
}
}
