import React, { Component } from 'react';
import '../stylesheets/App.css';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <span>Copyright <FontAwesome className='' name='copyright' size='1x' /> 2017 NKricher </span> <br />
        <span className=''>Made with<FontAwesome className='' name='heart-o' size='1x' /> & <FontAwesome className='' name='coffee' size='1x' />in Vancouver, <span>🇨🇦</span></span>
      </div>
    )
  }
}
