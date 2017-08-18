import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import logo from '../NKlogov2.png'
import '../stylesheets/App.css';


export default class TopNav extends Component {
  render() {
    return (
      <div className='topnav'>
        <div className='App-header xs-only'>
          <img src={logo} className="App-logo pull-left" alt="logo" />
          <FontAwesome className="fa pull-right burger-menu" name='bars' size='2x' />
        </div>
        <div className="App-header hide-xs">
          <div className='logo-img'>
            <Link to='/'> <img src={logo} className="App-logo" alt="logo" /> </Link>
          </div>
          <div className='site-map'>
            <ul className='navbar-list'>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className="fa-socials hide-sm">
            <Link to='https://twitter.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='twitter' size='2x' /></Link>
            <Link to='https://github.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='github' size='2x' /></Link>
            <Link to='https://linkedin.com/in/neilkrichi' target="_blank"><FontAwesome className="fa" name='linkedin' size='2x' /></Link>
            <Link to='https://instagram.com/nkricher' target="_blank"><FontAwesome className="fa" name='instagram' size='2x' /></Link>
          </div>
        </div>
      </div>
    );
  }
}
