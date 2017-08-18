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
          <div className='contact-form'>
            <h1>Send me an email</h1>
            <ContactForm />
          </div>
          <div className='location-details hide-xs'>
            <div className='map-wrapper'><GoogleMap className='map' /></div>
            <div className='contact-details'>
              <p><strong>Tel:</strong> +1 (514) 834-6382 </p>
              <p><strong>Email:</strong> <a href='mailto:neilkrichi@gmail.com'>neilkrichi@gmail.com</a></p>
              <p><strong>Skype:</strong> neil.krichi</p>
              <p><strong>Address:</strong> 225 W. 8th Ave #300, Vancouver, BC V5Y 1N3</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
