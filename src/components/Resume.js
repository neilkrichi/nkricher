import React, { Component } from 'react'

import TopNav from './TopNav'
import Footer from './Footer'
import '../stylesheets/App.css'
import resume from '../resumev7.png'

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className='resume-page'>
          <div className='resume'>
            <img className='resume-pic' src={resume} />
          </div>
          <button className='cta-button' onClick={()=>window.open('https://mcgill-my.sharepoint.com/personal/neil_krichi_mail_mcgill_ca/_layouts/15/guestaccess.aspx?docid=0dafbb07e6588427ea6b0c6bd2a8cc776&authkey=ASVDb_pJQ9OGqkCoSgdNGdw', '_blank')}>Download</button>
        </div>
        <Footer />
      </div>

    )
  }
}
