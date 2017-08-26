import React, { Component } from 'react'
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
            <h1>Hi guys, I'm Neil. Front-End developer and Product designer currently living in Vancouver, <span> 🇨🇦</span>.</h1>
            <p>I enjoy solving tough problems and creating delightful, intuitive designs and interfaces. </p>
          </div>
          <div className="projects-row">
            <div className="box first-item">
              <div className="content">
                <h2 className="project-name">Surflife</h2>
                <div className="project-details">
                  <p>Front-End Development</p>
                </div>
              </div>
            </div>
            <div className="box second-item">
              <div className="content">
                <h2 className="project-name">Roastr</h2>
                <div className="project-details">
                  <p>Product Design • Front-End Development</p>
                </div>
              </div>
            </div>
            <div className="box third-item">
              <div className="content">
                <h2 className="project-name">What Are Those?</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p>Product Design • Mobile Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box fourth-item">
              <div className="content">
                <h2 className="project-name">TrackMyTeam</h2>
                <div className="project-details">
                  <p>Product design • Front-End Development</p>
                </div>
              </div>
            </div>
            <div className="box fifth-item">
              <div className="content">
                <h2 className="project-name">Forecast 5</h2>
                <div className="project-details">
                  <p>Front-End Development</p>
                </div>
              </div>
            </div>
            <div className="box sixth-item">
              <div className="content">
                <h2 className="project-name">Lorem Ipsum</h2>
                <div className="project-details">
                  <div className="project-details">
                    <p>Product Design • Mobile Development</p>
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
