import React, { Component } from 'react'
import { Link } from 'react-router'
import TypeOut from 'react-typeout'
import ReactGA from 'react-ga'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css';
import avatar from '../NKavatar.png'

const words = [' creative', 'n enthusiastic', 'n adventurous', ' passionate'];


export default class Home extends Component {
    handleClick(){
      ReactGA.event({
           category: 'Navigation',
           action: 'Clicked Link',
       });
    }

  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="intro">
          <div className='avatar'>
            <img className='avatar-pic' src={avatar} />
          </div>
          <div className='intro-text'>
            <h3 className="app-intro">
              My name is Neil Krichi.
            </h3>
            <p className='description'>I am a<span className='typewriter'><TypeOut words={words} typeSpeed={100} /></span> front-end developer and autodidact.</p>
          </div>
        </div>
        <Link to='/projects'><button className="cta-button" onClick={() => {this.handleClick()}}>Take a look at my work.</button></Link>
        <Footer />
      </div>

  );
}
}
