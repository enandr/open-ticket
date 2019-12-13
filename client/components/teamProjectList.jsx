import React from 'react';
import TeamProject from './teamProject';
import AlertIcon from './AlertIcon';

export default class TeamProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loaded: 'false',
      search: '',
      searchType: 'projectTitle'
    };
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {
    this.getTeamProjects();
  }

  getTeamProjects() {
    fetch(`/api/project?userId=${this.props.userId}`)
      .then(res => res.json())
      .then(data => {
        const reverseData = data.reverse();
        this.setState({ projects: reverseData, loaded: 'true' });
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  searchOrFilter(event) {
    const newState = {};
    newState.search = event.target.value;
    newState.searchType = event.target.name;
    this.setState(newState);
  }

  render() {
    const teamArray = this.state.projects.map((value, index) => {
      if (value[this.state.searchType].toLowerCase().includes(this.state.search.toLowerCase())) {
        return (<TeamProject key={index} value={value} setView={this.props.setView} setProjectId={this.props.setProjectId} />);
      }
    });

    if (!this.state.projects[0] && this.state.loaded === 'true') {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center centerHeight">
          <div className="text-center">
            <AlertIcon />
            <h3>No Projects Available</h3>
            <h5>Please create one.</h5>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <input className="form-control" name="projectTitle" type="text" placeholder="Search" aria-label="Search" onChange={this.searchOrFilter}></input>
          <table className="table table-bordered table-hover clickable">
            <tbody>
              {teamArray}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
