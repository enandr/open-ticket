import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      users: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    /*     fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false })); */
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A new project was created: ' + this.state.value);
    // const newProject = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   users: this.state.users
    // };
  }

  render() {
    const titleValue = this.state.title;
    const descriptionValue = this.state.description;
    const usersValue = this.state.users;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Title:
          <input type="text" value={titleValue} onChange={this.handleChange} />
        </label>
        <label>
        Description:
          <input type="text" value={descriptionValue} onChange={this.handleChange} />
        </label>
        <label>
        Users:
          <input type="text" value={usersValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
