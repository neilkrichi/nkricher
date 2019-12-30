import React, { Component } from 'react';
import fire from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBcJUKGyY97TeBfX9xShAR5G1IlaTAciBo",
  authDomain: "firebasics-79185.firebaseapp.com",
  databaseURL: "https://firebasics-79185.firebaseio.com",
  projectId: "firebasics-79185",
  storageBucket: "firebasics-79185.appspot.com",
  messagingSenderId: "234788147074",
  appId: "1:234788147074:web:9ecacfc8eca3905941099b",
  measurementId: "G-X24RJS3R29"
}; 

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      content: '',
      date: '',
      emailError: '',
      emptyFieldError: '',
      successMessage: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    

    if (!fire.apps.length) {
      fire.initializeApp(firebaseConfig);
    }
    this.firedb = fire.database();
    this.messages = this.firedb.ref('messages');
  }

  validateEmail(){
    if (this.state.email === ''){
      this.setState({emailError: ''})
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(this.state.email)) {
      this.setState({emailError: 'Please enter a valid email address'})
    } else{
      this.setState({emailError: ''})
    }
  }

  postEmail() {
      const messageData = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.content,
        createdAt: new Date()
      }

      const newMessageData = this.messages.push();
      newMessageData.set(messageData);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.content !== '' && this.state.email !== '' && this.state.emailError !== 'Please enter a valid email address') {
      this.setState({emptyFieldError: '', successMessage: 'Success! Your message was sent, I will get back to you shortly.', name: '', email: '', content: ''});
      this.postEmail();
    }
    else {
      this.setState({emptyFieldError: 'All fields are required.', successMessage: ''});
    }
  }

  render(){
    return(
      <form className='create-form' onSubmit={this.handleSubmit}>
        <span className='success-message'>{this.state.successMessage}</span>
        <div>
          <label>Your name</label><br/>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder=''
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Your email</label><br/>
          <input
            type='text'
            name='email'
            value={this.state.email}
            placeholder=''
            onBlur={this.validateEmail}
            onChange={this.handleInputChange}
            />
          <span className='error-message'>{this.state.emailError}</span>
        </div>
        <div>
          <label>Your message</label><br/>
          <textarea
            type='text'
            name='content'
            value={this.state.content}
            placeholder=''
            onChange={this.handleInputChange}
            />
        </div>
        <button type="submit" className='submit-form' onClick={this.handleSubmit}>Send</button>
        <br/> <span className='error-message'>{this.state.emptyFieldError}</span>
      </form>
    )
  }
}
