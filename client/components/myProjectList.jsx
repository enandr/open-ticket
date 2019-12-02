import React from 'react';
import MyProject from './myProject';

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
        <tbody>
          <MyProject setView={this.props.setView}/>
        </tbody>
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
