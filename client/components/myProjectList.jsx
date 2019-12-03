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
    this.getProjects();
  }

  getProjects() {
    fetch('/api/project')
      .then(res => res.json())
      .then(data => this.setState({ projects: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const array = this.state.projects.map((value, index) => <MyProject key={index} value={value} setView={this.props.setView} />);
    return (
      <table className="table table-bordered">
        <tbody>
          {array}
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
