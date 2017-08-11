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
            <FontAwesome name='twitter' size='2x' />
            <FontAwesome name='github' size='2x' />
            <FontAwesome name='linkedin' size='2x' />
            <FontAwesome name='instagram' size='2x' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
