import React, { Component } from 'react'
import { Link } from 'react-router'
import TypeOut from 'react-typeout'
import ReactGA from 'react-ga'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css';
import avatar from '../assets/NKavatar.png'

const words = ['Creative', 'Enthusiastic', 'Adventurous', 'Passionate'];


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
              I'm Daniel Mossos Pitre the faggot.
            </h3>
            <p className='description'><span className='typewriter'><TypeOut words={words} typeSpeed={100} /></span> Front-End Developer and Lifelong Learner.</p>
          </div>
        </div>
        <Link to='/resume'><button className="cta-button" onClick={() => {this.handleClick()}}>Take a look at my resume</button></Link>
        <Footer />
      </div>

  );
}
}
