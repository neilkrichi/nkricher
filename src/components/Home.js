import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import TypeOut from 'react-typeout';

import TopNav from './TopNav'
import Footer from './Footer'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';

const words = [' creative', 'n enthusiastic', 'n adventurous', ' passionate'];


export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="intro">
          <h1>Hello, it's me.</h1> <br/>
          <h3 className="app-intro">
            I'm Neil and I am a<span className='typewriter'><TypeOut words={words} typeSpeed={100} /></span> designer and developer.
          </h3> <br/>
        <Link to='/projects'><button className="cta-button">Let's see what you've got, Neil.</button></Link>
        </div>
        <Footer />
      </div>

  );
}
}
