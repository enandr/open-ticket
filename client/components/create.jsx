import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      users: ''
    };
    this.backPage = this.props.backpage;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A new project was created: ' + this.state.value);
    this.props.setView(this.backPage);
    // const newProject = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   users: this.state.users
    // };
  }

  render() {
    const titleValue = this.state.title;
    const descriptionValue = this.state.description;
    // const usersValue = this.state.users;
    // if (1 === 1) {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
              Title:
            <input className="form-control" type="text" value={titleValue} onChange={this.handleChange} />
          </label>
        </div>
        <label>
              Description:
          <input className="form-control" type="text" value={descriptionValue} onChange={this.handleChange} />
        </label>
        <div className="form-group">
          <label>
              Users:
            <select className="form-control clickable">
              <option>Roger</option>
              <option>Ziyaad</option>
              <option>Jake</option>
              <option>Khoa</option>
            </select>
          </label>
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    );
    // }

  }
}
