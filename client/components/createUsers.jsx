import React from 'react';

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
      return this.setState({ status: 'Please enter all the required fields *' });
    } else {
      this.createUser();
    }
  }

  createUser() {
    const sendObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      slackId: this.state.slackId
    };
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendObject)
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'Already Exits') {
          this.setState({ status: 'Username Already Exists' });
        } else {
          this.props.setView('logIn');
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div className="text-center body-signUp">
          <form onSubmit={this.checkEmpty}>
            <h4 className="card-title mb-4 mt-1">Sign Up</h4>
            <label>*Username:</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <label>*Your password:</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" type="password" placeholder="Password" name="password" value={this.state.pass} onChange={this.handleChange}/>
            </div>
            <label>*Email:</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <label>SlackID:</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" placeholder="SlackID" name="slackId" value={this.state.slackId} onChange={this.handleChange}/>
            </div>
            <p className="text-danger">* required</p>
            <p className="text-danger">{this.state.status}</p>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block col-3"> Sign Up</button>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button className="btn btn-outline-danger btn-block col-3" onClick={() => this.props.setView('logIn')} >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
