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

    this.getProjects();
  }

  getProjects() {

    fetch(`/api/project?userId=${this.props.userId}`)

      .then(res => res.json())
      .then(data => this.setState({ projects: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const reverseArray = this.state.projects.reverse();
    const array = reverseArray.map((value, index) => <MyProject key={index} value={value} setView={this.props.setView} setProjectId={this.props.setProjectId}/>);
    return (
      <table className="table table-bordered clickable">
        <tbody>
          {array}
        </tbody>
      </table>
    );
  }
}
