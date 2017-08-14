import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import ReactPDF from 'react-pdf'

import TopNav from './TopNav'
import Footer from './Footer'
import logo from '../NKlogo.png'
import '../stylesheets/App.css'
import resume from '../resume.pdf'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <h1>Here is my resume</h1>
        <div className='resume'>
          <ReactPDF
             file={resume}
             onDocumentError={({ message }) => alert('Error while loading document! ' + message)}
             loading="Loading. Please wait!"
              />
        </div>
        <Footer />
      </div>

    )
  }
}
