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
          <button className='cta-button' onClick={()=>window.open('http://bit.ly/2wE9JEI', '_blank')}>Download</button>
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
