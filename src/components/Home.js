import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

import TopNav from './TopNav'
import Footer from './Footer'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <h1 className='main-header'>Home :)</h1>
        <Footer />
      </div>
    );
  }
}
