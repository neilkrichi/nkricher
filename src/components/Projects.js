import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import FontAwesome from 'react-fontawesome'
import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'


export default class Projects extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='projects-page'>
          <div className='about-me'>
            <h2>Hi! I'm Neil, and I'm a Front-End developer based in Vancouver, BC.</h2>
            <p>I like ☕️, ⚽ and 🐶. </p>
          </div>
          <div className="projects-row">
            <div className="box item" onClick={()=>window.open('http://tmteam.herokuapp.com', '_blank')}>
              <div className="content">
                <h2 className="project-name">TrackMyTeam</h2>
                <div className="project-details">
                  <p className="descrip">Landing Page for an Athletic Management App.</p>
                  <p className="role">Product Design • Front-End Development</p>
                  <p className="stack">HTML, CSS, Bootstrap, JavaScript</p>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.open('http://roastrr.herokuapp.com', '_blank')}>
              <div className="content">
                <h2 className="project-name">Roastr</h2>
                <div className="project-details">
                  <p className="descrip">Online Coffee Marketplace.</p>
                  <p className="role">Product Design • Front-End Development</p>
                  <p className="stack">HTML, CSS, JavaScript, React</p>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.open('http://git-repertoire.herokuapp.com')}>
              <div className="content">
                <h2 className="project-name">Github Repertoire</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p className="descrip">Github User Search App.</p>
                    <p className="role">Front-End Development</p>
                    <p className="stack">HTML, CSS, JavaScript, React/Redux</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.open('http://forecast5.herokuapp.com', '_blank')}>
              <div className="content">
                <h2 className="project-name">Forecast 5</h2>
                <div className="project-details">
                  <p className="descrip">5-day Weather Forecast Project.</p>
                  <p className="role">Front-End Development</p>
                  <p className="stack">HTML, CSS, JavaScript, React</p>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.open('https://codepen.io/neilkrichi/full/YLEKjN/', '_blank')}>
              <div className="content">
                <h2 className="project-name">Rainbow 🌈</h2>
                <div className="project-details">
                  <p className="descrip">Sketching App.</p>
                  <p className="role">Front-End Development</p>
                  <p className="stack">HTML5 Canvas, CSS, JavaScript</p>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>browserHistory.push('/watdog')}>
              <div className="content">
                <h2 className="project-name">Watdog (Coming Soon)</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p className="descrip">Image Recognition App.</p>
                    <p className="role">Product Design • Mobile Development</p>
                    <p className="stack">React Native</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.location.href = "mailto:neilkrichi@gmail.com?subject=Hi%20Neil"}>
              <div className="content">
                <h2 className="project-name">Want to see more?</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p><FontAwesome className='' name='envelope-o'/>Drop me an email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
