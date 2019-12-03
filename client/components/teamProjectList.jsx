import React from 'react';
import TeamProject from './teamProject';

export default class TeamProjectList extends React.Component {
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
    this.getTeamProjects();
  }

  getTeamProjects() {
    fetch('/api/project')
      .then(res => res.json())
      .then(data => this.setState({ projects: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const teamArray = this.state.projects.map((value, index) => <TeamProject key={index} value={value} setView={this.props.setView} />);
    return (
      <table className="table table-bordered">
        <tbody>
          {teamArray}
        </tbody>
      </table>
    );
    // return (
    //   <div className="container">
    //     <div className="row">
    //       <TeamProject setView={this.props.setView} />
    //       <button onClick={() => this.props.setView('myProjectList')}>
    //         My Projects
    //       </button>
    //       <button onClick={() => this.props.setView('teamProjectList')}>
    //         Team Projects
    //       </button>
    //     </div>
    //   </div>
  }
}
