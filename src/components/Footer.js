import React, { Component } from 'react'
import '../stylesheets/App.css'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <span className="fa-socials xs-only">
          <Link to='https://github.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='github' size='2x' /></Link>
          <Link to='https://linkedin.com/in/neilkrichi' target="_blank"><FontAwesome className="fa" name='linkedin' size='2x' /></Link>
          <Link to='https://behance.net/neilkrichi04ff' target="_blank"><FontAwesome className="fa" name='behance' size='2x' /></Link>
          <Link to='https://instagram.com/nkricher' target="_blank"><FontAwesome className="fa" name='instagram' size='2x' /></Link>
        </span>
        <br className='xs-only' />
        <span className='copyright pull-left'> <FontAwesome className='' name='copyright' size='1x' /> 2017-2018 Neil Krichi </span>
        <br className='xs-only' />
        <span className='pull-right'>Made with<FontAwesome className='' name='heart-o' size='1x' /> & <FontAwesome className='' name='coffee' size='1x' />in Vancouver, Canada</span>
      </div>
    )
  }
}
