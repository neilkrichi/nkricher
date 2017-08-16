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
          <h1>Here are my projects</h1>
        </div>
        <Footer />
      </div>

    )
  }
}
