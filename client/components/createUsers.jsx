import React from 'react';

export default class CreateUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  checkEmpty() {

  }

  createUser(event) {
    event.preventDefault();
    const sendObject = this.state;
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendObject)
    })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createUser}>
          <h3>Sign Up</h3>
          <label>Username: </label>
          <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <label>Password: </label>
          <input placeholder="Password" name="password" value={this.state.pass} onChange={this.handleChange}></input>
          <label>Email: </label>
          <input placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          <button className="btn btn-success" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
