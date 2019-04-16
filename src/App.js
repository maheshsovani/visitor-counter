import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.getmails = this.getmails.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  createdata(data) {
    this.setState({ count: data.count });
  }

  sendRequest(email) {
    fetch('/hello', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => this.createdata(data));
  }

  getmails(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let email = data.get('email');
    this.sendRequest(email);
  }

  render() {
    return (
      <div className='form-div'>
        <h1>Please enter the email address</h1>
        <div>
          <form onSubmit={this.getmails}>
            <input
              className='user-name'
              type='text'
              name='email'
              placeholder={'enter email'}
              required
            />
            <br />
            <input className='submit-button' type='submit' />
          </form>
        </div>
        <h1>Number of visitors:{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
