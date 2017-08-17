import React, { Component } from 'react'

import ContactForm from './ContactForm'
import GoogleMap from './GoogleMap'
import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className='contact-page'>
          <div className='location-details'>
            <h1>Contact me!</h1>
            <div className='map-wrapper'><GoogleMap className='map' /></div>
            <div className='contact-details'>
              <p>Suite Genius address</p>
              <p>email</p>
              <p>phone number</p>
            </div>
          </div>
          <div className='contact-form'>
            <h1>Contact me!</h1>
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
