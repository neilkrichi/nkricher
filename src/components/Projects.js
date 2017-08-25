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
              <h2 className="project-name">Surflife</h2>
            </div>
            <div className="box second-item">
              <h2 className="project-name">Surflife</h2>
            </div>
            <div className="box third-item">
              <h2 className="project-name">Surflife</h2>
            </div>
            <div className="box fourth-item">
              <h2 className="project-name">Surflife</h2>
            </div>

            <div className="box fifth-item">
              <h2 className="project-name">Surflife</h2>
            </div>
            <div className="box sixth-item">
              <h2 className="project-name">Surflife</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
