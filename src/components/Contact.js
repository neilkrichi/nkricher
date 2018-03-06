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
          <div className='location-details'>
            <div className='map-wrapper'><GoogleMap className='map' /></div>
            <div className='contact-details'>
              <p><strong>Tel:</strong> +1 (514) 834-6382 </p>
              <p><strong>Email:</strong> <a href='mailto:neil.krichi@gmail.com'>neilkrichi@gmail.com</a></p>
              <p><strong>Skype:</strong> neil.krichi</p>
              <p><strong>Address:</strong> 186 W. 41st Street, Vancouver, BC V5Y 2S1, Canada</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
