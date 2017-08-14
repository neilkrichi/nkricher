import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

import TopNav from './TopNav'
import Footer from './Footer'
import logo from '../NKlogo.png'
import '../stylesheets/App.css';

export default class Resume extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <h1>Here is my resume</h1>
        <Footer />
      </div>

    )
  }
}
