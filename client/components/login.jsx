import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'roger',
      pass: '12345'
    };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName() {
    this.setState({ userName: event.target.value });
  }

  handleChangePass() {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUrl = `/api/login?name=${this.state.userName}&password=${this.state.pass}`;
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        if (!isNaN(data)) {
          this.props.setId(data);
          this.props.setView('myProjectList');
        }
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeUserName}></input>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}></input>
          <button className="btn btn-success" type="submit">Login</button>
        </form>
      </div>
    );
  }
}
