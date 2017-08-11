import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className='navbar-list'>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <div className="fa-socials">
            <FontAwesome className="fa" name='twitter' size='2x' />
            <FontAwesome className="fa" name='github' size='2x' />
            <FontAwesome className="fa" name='linkedin' size='2x' />
            <FontAwesome className="fa" name='instagram' size='2x' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
