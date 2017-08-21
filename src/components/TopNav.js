import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import logo from '../NKlogov2.png'
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
      <div className='open'>
          <ul className='navbar-list navbar-list-mobile'>
            <Link to='/about'><li>About</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/resume'><li>Resume</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
          </ul>
      </div>
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
          <Link to='/'><img src={logo} className="App-logo pull-left" alt="logo" /></Link>
          <FontAwesome onClick={this.togglePopup.bind(this)} className="fa pull-right burger-menu" name={this.renderBurgerIcon()} size='2x' />
        </div>
        <div className='xs-only'>
          {this.renderPopup()}
        </div>
        <div className="App-header hide-xs">
          <div className='logo-img'>
            <Link to='/'> <img src={logo} className="App-logo" alt="logo" /> </Link>
          </div>
          <div className='site-map'>
            <ul className='navbar-list'>
              <Link to='/about'><li>About</li></Link>
              <Link to='/projects'><li>Projects</li></Link>
              <Link to='/resume'><li>Resume</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </div>
          <div className="fa-socials hide-sm">
            <Link to='https://github.com/neilkrichi' target="_blank"><FontAwesome className="fa" name='github' size='2x' /></Link>
            <Link to='https://linkedin.com/in/neilkrichi' target="_blank"><FontAwesome className="fa" name='linkedin' size='2x' /></Link>
            <Link to='https://instagram.com/nkricher' target="_blank"><FontAwesome className="fa" name='instagram' size='2x' /></Link>
            <Link to='https://behance.net/neilkrichi04ff' target="_blank"><FontAwesome className="fa" name='behance' size='2x' /></Link>
          </div>
        </div>
      </div>
    );
  }
}
