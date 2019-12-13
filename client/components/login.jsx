import React from 'react';
import openTicketImage from '../../server/public/images/open-ticket.png';
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
          this.setState({ status: 'Oops! Wrong Username or Password!' });
        }
      })
      .catch(error => alert(error));
  }

  handleChangeView() {
    this.props.setView('createUser');
  }

  render() {
    return (
      <div className="container">
        <div className="text-center body-signIn">
          <img src={openTicketImage} alt="open ticket"/>
          <h1>openTicket</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" placeholder="Username" type="text" value={this.state.name} onChange={this.handleChangeUserName}/>
            </div>
            <label>Your password</label>
            <div className="form-group d-flex justify-content-center">
              <input className="form-control col-6" placeholder="******" type="password" value={this.state.password} onChange={this.handleChangePass}/>
            </div>
            <p className="text-danger">{this.state.status}</p>
            <div className="form-group d-flex justify-content-center">
              <div className="loginBtns px-1">
                <button type="submit" className="btn btn-primary btn-block"> Login</button>

              </div>
              <div className="loginBtns px-1">
                <button className="btn btn-success btn-block" onClick={this.handleChangeView}>Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
