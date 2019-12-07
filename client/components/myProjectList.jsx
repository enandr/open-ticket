import React from 'react';
import MyProject from './myProject';

export default class MyProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      search: ''
    };
    this.searchInput = this.searchInput.bind(this);
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

  searchInput(event) {
    const searchVal = event.target.value;

    this.setState({ search: searchVal });

  }

  render() {

    const array = this.state.projects.map((value, index) => {

      if (value.projectTitle.toLowerCase().includes(this.state.search.toLowerCase())) {
        return (<MyProject key={index} value={value} setView={this.props.setView} setProjectId={this.props.setProjectId}/>);
      }

    });

    return (
      <div>
        <input className="form-control " type="text" placeholder="Search" aria-label="Search" onChange={this.searchInput}></input>
        <table className="table table-bordered clickable">
          <tbody>
            {array}
          </tbody>
        </table>
      </div>
    );
  }
}
