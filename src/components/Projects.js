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
          <div className="projects-row">
            <div className="col first-item">
              Box 1
            </div>
            <div className="col second-item">
              Box 2
            </div>
            <div className="col third-item">
              Box 3
            </div>
          </div>
          <div className="projects-row">
            <div className="col fourth-item">
              Box 1
            </div>
            <div className="col fifth-item">
              Box 2
            </div>
            <div className="col sixth-item">
              Box 3
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
