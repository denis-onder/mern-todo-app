import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password2: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick() {
    const user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios.post('/api/register', user)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Authentication">
        <input type="text" name="email" value={this.state.email} onChange={this.onChange}/>
        <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
        <input type="password" name="password2" value={this.state.password2} onChange={this.onChange}/>
        <button onClick={this.onClick}>Register</button>
      </div>
    )
  }
}

export default Register;