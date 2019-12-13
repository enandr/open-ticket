import React from 'react';
import LogOut from './logoutIcon';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: null,
      user: null,
      slackId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateSlack = this.updateSlack.bind(this);
  }

  componentDidMount() {
    fetch(`/api/account?userId=${this.props.userId}`)
      .then(response => response.json())
      .then(data => this.setState({ infos: data }))
      .catch(error => alert(error));
    fetch(`/api/users?userId=${this.props.userId}`)
      .then(response => response.json())
      .then(data => this.setState({ user: data[0], slackId: data[0].slackId }))
      .catch(error => alert(error));
  }

  handleChange(event) {
    this.setState({ slackId: event.target.value });
  }

  updateSlack() {
    const sendValue = {
      userId: this.props.userId,
      slackId: this.state.slackId
    };
    fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendValue)
    });
  }

  render() {
    if (this.state.infos && this.state.user) {
      return (
        <div className="container text-center font-weight-bold mt-5">
          <p>Name: {this.state.user.name} </p>
          <p>Email: {this.state.user.email}</p>
          <p>All projects: {this.state.infos.projects}</p>
          <p>Open Tickets: {this.state.infos.openTicket}</p>
          <p>Closed Tickets: {this.state.infos.closedTicket}</p>
          <p>In Progress Tickets: {this.state.infos.progressTicket}</p>
          <label>SlackId: </label>
          <div className='container d-flex justify-content-center row align-content-center'>
            <input defaultValue={this.state.slackId} onChange={this.handleChange} maxLength='9' className="form-control col-5 float-left mr-3" id="exampleInputEmail1"></input>
            <button onClick={this.updateSlack} className="btn btn-info col-3 d-block">Save</button>
          </div>
          <div className='container justify-content-center mt-5'>
            <LogOut setView={this.props.setView}/>
          </div>
        </div>
      );
    }
    return null;
  }
}
