import React, { Component } from 'react'
import '../stylesheets/App.css'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <span className="fa-socials xs-only">
          <Link to='https://github.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='github' /></Link>
          <Link to='https://linkedin.com/in/neilkrichi' target="_blank"><FontAwesome className="fa" name='linkedin' /></Link>
          <Link to='https://behance.net/neilkrichi04ff' target="_blank"><FontAwesome className="fa" name='behance' /></Link>
          <Link to='https://codepen.io/neilkrichi' target="_blank"><FontAwesome className="fa" name='codepen' /></Link>
        </span>
        <br className='xs-only' />
        <span className='copyright pull-left'><FontAwesome className='' name='copyright' />2020 Neil Krichi </span>
        <br className='xs-only' />
        <span className='pull-right'>Made with<FontAwesome className='' name='heart-o' /> & <FontAwesome className='' name='coffee' />in Vancouver, Canada.</span>
      </div>
    )
  }
}
