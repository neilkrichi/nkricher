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
            <h2>Hi! I'm Neil, and I'm a Front-End developer based out of Vancouver, BC.</h2>
            <p>I like ☕️ and 🐶. </p>
          </div>
          <div className="projects-row">

                <div className="box item" onClick={()=>window.open('http://www.gosurflife.com', '_blank')}>
                  <div className="content">
                    <h2 className="project-name">Surflife</h2>
                    <div className="project-details">
                      <p>Front-End Development</p>
                    </div>
                  </div>
                </div>

              <div className="box item" onClick={()=>window.open('http://roastrr.herokuapp.com', '_blank')}>
                <div className="content">
                  <h2 className="project-name">Roastr</h2>
                  <div className="project-details">
                    <p>Product Design • Front-End Development</p>
                  </div>
                </div>
              </div>

              <div className="box item" onClick={()=>browserHistory.push('/watdog')}>
                <div className="content">
                  <h2 className="project-name">WatDog</h2>
                  <div className="project-details">
                    <div className="project-details">
                      <p>Product Design • Mobile Development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box item" onClick={()=>window.open('http://tmteam.herokuapp.com', '_blank')}>
                <div className="content">
                  <h2 className="project-name">TrackMyTeam</h2>
                  <div className="project-details">
                    <p>Product Design • Front-End Development</p>
                  </div>
                </div>
              </div>

            <div className="box item" onClick={()=>window.open('http://forecast5.herokuapp.com', '_blank')}>
              <div className="content">
                <h2 className="project-name">Forecast 5</h2>
                <div className="project-details">
                  <p>Front-End Development</p>
                </div>
              </div>
            </div>

            <div className="box item" onClick={()=>window.location.href = "mailto:neilkrichi@gmail.com?subject=Hi%20Neil"}>
              <div className="content">
                <h2 className="project-name">More?</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p><FontAwesome className='' name='envelope-o' size='1x' />Drop me an email</p>
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
