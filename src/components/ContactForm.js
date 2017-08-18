import React, { Component } from 'react';

export default class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      emailError: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }

  validateEmail(){
    if (this.state.email === '') {
      this.setState({emailError: ''})
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(this.state.email)) {
      this.setState({emailError: 'error'})
    }else{
      this.setState({emailError: 'nice'})
    }
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
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
          {this.state.emailError}
        </div>
        <div>
          <label>Your message</label><br/>
          <textarea
            type='text'
            name='message'
            value={this.state.message}
            placeholder=''
            onChange={this.handleInputChange}
            />
        </div>
        <button type="submit" className='submit-form' onClick={this.handleSubmit}>Send</button>
      </form>
    )
  }
}
