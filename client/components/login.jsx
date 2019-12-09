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
        <div className="d-flex justify-content-center">
          <div className="card card col-sm-3 col-lg-3 col-9">
            <article className="card-body">
              <a className="float-right btn btn-outline-primary" onClick={this.handleChangeView}>Sign up</a>
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input className="form-control col-sm" placeholder="Username" type="text" value={this.state.name} onChange={this.handleChangeUserName}/>
                </div>
                <div className="form-group">
                  <label>Your password</label>
                  <input className="form-control" placeholder="******" type="password" value={this.state.password} onChange={this.handleChangePass}/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block"> Login</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
