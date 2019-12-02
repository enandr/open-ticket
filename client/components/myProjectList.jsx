import React from 'react';

export default class MyProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false }));
  }

  render() {
    return (
      <table className="table">
        <nav className="navbar navbar-expand-lg color fixed-top">
          <a className="navbar-brand">Projects</a>
        </nav>
        <tbody>
          <tr>
            <td><strong>Project 1</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 2</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 3</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 4</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 5</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 6</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 7</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 8</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
          <tr>
            <td><strong>Project 9</strong>
              <p>
                <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
              </p>
            </td>
          </tr>
        </tbody>
        <footer className="footer">
          <div className="row">
            <button className="col">My Tickets</button>
            <button className="col">Create</button>
            <button className="col">All Tickets</button>
          </div>
        </footer>
      </table>
      // <div className="container">
      //   <div className="row">
      //     <MyProject setView={this.props.setView} />
      //     <button onClick={() => this.props.setView('myProjectList')}>
      //       My Projects
      //     </button>
      //     <button onClick={() => this.props.setView('teamProjectList')}>
      //       Team Projects
      //     </button>
      //   </div>
      // </div>
    );
  }
}
