import React, { Component } from 'react'
import ReactPDF from 'react-pdf'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'
import resume from '../resumev5.pdf'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='resume-page'>
          <div className='resume'>
            <ReactPDF
              file={resume}
              onDocumentError={({ message }) => alert('Error while loading document! ' + message)}
              loading="Loading. Please wait!"
              scale={1.25}
                />
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
