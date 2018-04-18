import React, { Component } from 'react';
import axios from 'axios';

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
  }

  getCurrentDate(){
    let dt = new Date()
    let utcDt = dt.toUTCString()

    return utcDt
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

    let newName = `${this.state.name} sent this on ${this.getCurrentDate()}. Email is ${this.state.email}`

      let emailData = {
        author: newName,
        text: this.state.content,
      }

      let stuff = [emailData, this.getCurrentDate()]

      // pass the actual values to make this POST CALL
      return axios.post('http://localhost:3001/api/comments', emailData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.content !== '' && this.state.email !== '' && this.state.emailError !== 'Please enter a valid email address') {
      this.setState({emptyFieldError: '', successMessage: 'Success! Your message was sent and I will get back to you shortly.', name: '', email: '', content: ''});
      this.postEmail();
    }
    else {
      this.setState({emptyFieldError: 'All field are required.', successMessage: ''});
    }
  }

  render(){
    return(
      <form className='create-form' onSubmit={this.handleSubmit}>
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
        <span className='success-message'>{this.state.successMessage}</span>
      </form>
    )
  }
}
