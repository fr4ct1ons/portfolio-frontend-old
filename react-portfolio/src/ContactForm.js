import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Page from "./Page";
import { render } from 'react-dom';
import { isEmailValid, isSubjectValid, isMessageValid } from './validation';
import './cascades/Navbar.css';


const validate =
{
    email: isEmailValid,
    subject: isSubjectValid,
    message: isMessageValid
}


class ContactForm extends React.Component
{
  constructor(props)
  {
      super(props)

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = 
      {
          email : "",
          subject : "",
          message : ""
      }
  }

  onChange(event)
  {
    const {name, value} = event.target;
    this.setState((state) => ({
        ...state,
        [name]: value
    }))
  }

  onSubmit(event)
  {
      event.preventDefault();

      const errorEmail = isEmailValid(this.state.email);
      const errorSubject = isSubjectValid(this.state.subject);
      const errorMessage = isMessageValid(this.state.message);

      console.log(this.state);

      if(!errorEmail)
        alert("Please, insert a valid email.")
      else if(!errorSubject)
        alert("Please, insert a valid subject.")
      else if(!errorMessage)
        alert("Please, make sure the message field is not empty.")
      else
      {
          alert("All good!");
      }
  }

  render()
  {
      return(
        <div align="center" className="ContactForm">
            <form onSubmit={this.onSubmit}>
            <label for="email">Email</label><br/>
            <input type="email" name="email" placeholder="name@provider.com" value={this.state.email} onChange={this.onChange} />
            <br/>
            <label for="subject">Subject</label><br/>
            <input type="text" name="subject" placeholder="A subject" value={this.state.subject} onChange={this.onChange} />
            <br/>
            <label for="message">Text</label><br/>
            <textarea name="message" placeholder="Your message here" value={this.state.message} onChange={this.onChange} />
            <br/>
            <input type="submit" value="Send"/>
            </form>
        </div>
      )
  }

  
}

export default ContactForm
