import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import firstlogo from '../assets/NKlogoHome.png'
import secondlogo from '../assets/NKlogoV3.png'
import '../stylesheets/App.css';


export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
    }
  }

  togglePopup(){
    this.setState({popupOpen: !this.state.popupOpen})
    // this.setState({a : b}) > a = b
    // TOGGLE BETWEEN 2 STATES
  }

  renderClosed(){
    return(
      <div onClick={this.togglePopup.bind(this)} className='closed'>
      </div>
    )
  }

  renderOpen(){
    return(
          <ul className='navbar-list navbar-list-mobile'>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/resume'><li id='no-border'>Resume</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
          </ul>
    )
  }

  renderPopup(){
    return this.state.popupOpen ? this.renderOpen() : this.renderClosed()
  }

  renderBurgerIcon() {
    if (this.state.popupOpen) {
      return 'times'
    }
    else {
      return 'bars'
    }
  }

  render() {
    return (
      <div className='topnav'>
        <div className='App-header xs-only'>
          <Link to='/'><img src={firstlogo} className="App-logo pull-left black-logo" alt="logo" /></Link>
          <Link to='/'><img src={secondlogo} className="App-logo pull-left round-logo" alt="logo" /></Link>
          <FontAwesome onClick={this.togglePopup.bind(this)} className="fa pull-right burger-menu" name={this.renderBurgerIcon()} size='2x' />
        </div>
        <div className='xs-only'>
          {this.renderPopup()}
        </div>
        <div className="App-header hide-xs">
          <div className='logo-img'>
            <Link to='/'><img src={firstlogo} className="App-logo pull-left black-logo" alt="logo" /></Link>
            <Link to='/'> <img src={secondlogo} className="App-logo round-logo" alt="logo" /> </Link>
          </div>
          <div className='site-map'>
            <ul className='navbar-list'>
              <Link to='/projects'><li>Projects</li></Link>
              <Link to='/resume'><li>Resume</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </div>
          <div className="fa-socials hide-sm">
            <Link to='https://github.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='github' size='2x' /></Link>
            <Link to='https://linkedin.com/in/neilkrichi' target="_blank"><FontAwesome className="fa" name='linkedin' size='2x' /></Link>
            <Link to='https://codepen.io/neilkrichi' target="_blank"><FontAwesome className="fa" name='codepen' size='2x' /></Link>
            <Link to='https://behance.net/neilkrichi04ff' target="_blank"><FontAwesome className="fa" name='behance' size='2x' /></Link>
        </div>
        </div>
      </div>
    );
  }
}
