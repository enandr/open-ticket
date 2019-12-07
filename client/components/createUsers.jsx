import React from 'react';
import BackIcon from './backIcon';

export default class CreateUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      slackId: '',
      status: ''
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

  checkEmpty(event) {
    event.preventDefault();
    if (!this.state.name || !this.state.password || !this.state.email) {
      this.setState({ status: 'Please enter all the require *' });
    } else {
      this.createUser();
    }
  }

  createUser() {
    const sendObject = this.state;
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendObject)
    })
      .then(this.props.setView('logIn'))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.setView('logIn')}>
          <BackIcon/>
        </div>
        <form onSubmit={this.checkEmpty}>
          <h3>Sign Up</h3>
          <label>* Username: </label>
          <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <label>* Password: </label>
          <input type="password" placeholder="Password" name="password" value={this.state.pass} onChange={this.handleChange}></input>
          <label>* Email: </label>
          <input placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          <label>SlackID: </label>
          <input placeholder="SlackID" name="slackId" value={this.state.slackId} onChange={this.handleChange}></input>
          {this.state.status}
          <button className="btn btn-success" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
