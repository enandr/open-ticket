import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      users: ['No Data Received'],
      linkedUsers: [this.props.userId, 2, 3, 4]
    };
    this.backPage = this.props.backpage;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setView(this.backPage);
    alert('A new project was created: ' + this.state.title);
    const body = {};
    body.title = this.state.title;
    body.description = this.state.description;
    body.users = this.state.linkedUsers;
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    fetch('/api/project', settings)
      .then(res => res.json())
      .then(data => this.props.setView(this.backPage))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const titleValue = this.state.title;
    const descriptionValue = this.state.description;
    const userList = this.state.users.map((value, index) => {
      if (value.id !== this.props.userId) {
        return (
          <option key={index} value={value.id}>{value.name}</option>
        );
      }
    }
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
              Title:
            <input className="form-control" name='title' type="text" value={titleValue} onChange={this.handleChange} />
          </label>
        </div>
        <label>
              Description:
          <input className="form-control" name='description' type="text" value={descriptionValue} onChange={this.handleChange} />
        </label>
        <div className="form-group">
          <label>
              Users:
            <select className="form-control clickable">
              {userList}
            </select>
          </label>
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    );
  }
}
