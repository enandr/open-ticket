import React from 'react';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pass: '',
      status: ''
    };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
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
        } else {
          this.setState({ status: 'Oops! Something Wrong with Username or Password!' });
        }
      })
      .catch(error => alert(error));
  }

  handleChangeView() {
    this.props.setView('createUser');
  }

  render() {
    return (
      <div>
        <div className="appName">
          <h1>OpenTicket</h1>
        </div>
        <div className="logInContainer">
          <form onSubmit={this.handleSubmit}>
            <p>{this.state.status}</p>
            <div className="username">
              <label>Username: </label>
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChangeUserName}></input>
            </div>
            <div className="password">
              <label>Password: </label>
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}></input>
            </div>
            <p onClick={this.handleChangeView}>Create Account ?</p>
            <button className="btn btn-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
