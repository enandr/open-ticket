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

        {/*     <h1 className="text-center">OpenTicket</h1>

        <div className="d-flex justify-content-center">
          <div className="card sign-in col-8 col-sm-5 col-md-3 col-lg-5 col-xl-2">
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
                <p className="text-danger">{this.state.status}</p>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block"> Login</button>
                </div>
              </form>
            </article>
          </div>
        </div>  */}

        <div className="text-center body-signIn">
          <h1>OpenTicket</h1>
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
              <button type="submit" className="btn btn-primary btn-block col-3"> Login</button>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button className="btn btn-success btn-block col-3" onClick={this.handleChangeView}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
