import React from 'react';
import MyProject from './myProject';

export default class MyProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      search: '',
      searchType: 'projectTitle'
    };
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {

    this.getProjects();
  }

  getProjects() {

    fetch(`/api/project?userId=${this.props.userId}`)

      .then(res => res.json())
      .then(data => {
        const reverseData = data.reverse();
        this.setState({ projects: reverseData });

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
    const array = this.state.projects.map((value, index) => {

      if (value[this.state.searchType].toLowerCase().includes(this.state.search.toLowerCase())) {
        return (<MyProject key={index} value={value} setView={this.props.setView} setProjectId={this.props.setProjectId} />);
      }

    });

    return (
      <div>
        <input className="form-control " name="projectTitle" type="text" placeholder="Search" aria-label="Search" onChange={this.searchOrFilter}></input>
        <table className="table table-bordered clickable">
          <tbody>
            {array}
          </tbody>
        </table>
      </div>
    );
  }
}
