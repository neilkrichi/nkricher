import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';


export default class TopNav extends Component {
  render() {
    return (
      <div className='topnav'>
        <div className="App-header">
          <Link to='/'> <img src={logo} className="App-logo" alt="logo" /> </Link>
          <ul className='navbar-list'>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <div className="fa-socials">
            <Link to='https://twitter.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='twitter' size='2x' /></Link>
            <Link to=''><FontAwesome className="fa" name='github' size='2x' /></Link>
            <Link to=''><FontAwesome className="fa" name='linkedin' size='2x' /></Link>
            <Link to=''><FontAwesome className="fa" name='instagram' size='2x' /></Link>
          </div>
        </div>
      </div>
    );
  }
}
