import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      users: ['No Data Received'],
      linkedUsers: [this.props.userId],
      projects: ['No Data Received'],
      projectId: null,
      disabledBtn: true,
      dueDate: ''
    };
    this.assigneeId = 0;
    this.priorityId = 4;
    this.statusId = 1;
    this.typeId = 1;
    this.backPage = this.props.backpage;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.backPage.match(/(project)/i)) {
      fetch('/api/users')
        .then(res => res.json())
        .then(data => this.setState({ users: data }))
        .catch(err => console.error('Fetch failed!', err));
    } else if (this.backPage.match(/(ticket)/i)) {
      fetch(`/api/project?userId=${this.props.userId}`)

        .then(res => res.json())
        .then(data => this.setState({ projects: data }))
        .catch(err => console.error('Fetch failed!', err));
    }
  }

  handleChange(event) {
    const newState = {};
    switch (event.target.name) {
      case 'select':
        if (event.target.value !== '0') {
          const tempArr = [parseInt(event.target.value)];
          const newArr = this.state.linkedUsers.concat(tempArr);
          this.setState({ linkedUsers: newArr });
        }
        break;
      case 'projectSelect':
        if (event.target.value !== '0') {
          this.setState({ projectId: parseInt(event.target.value) }, () => {
            fetch(`api/users?projectId=${this.state.projectId}`)

              .then(res => res.json())
              .then(data => this.setState({ users: data }))
              .catch(err => console.error('Fetch failed!', err));
          });
        }
        break;
      case 'assigneeSelect':
        this.assigneeId = event.target.value;
        break;
      case 'statusSelect':
        this.statusId = event.target.value;
        break;
      case 'prioritySelect':
        this.priorityId = event.target.value;
        break;
      case 'typeSelect':
        this.typeId = event.target.value;
        break;
      default:
        newState[event.target.name] = event.target.value;
        this.setState(newState);
        break;
    }
    if (this.backPage.match(/(project)/i)) {
      this.checkReadySendProject();
    } else if (this.backPage.match(/(ticket)/i)) {
      this.checkReadySendTicket();
    }
  }

  checkReadySendTicket() {
    if (
      this.state.title.length > 4 &&
      this.state.description.length > 4 &&
      this.state.dueDate.length === 10 &&
      this.assigneeId !== 0
    ) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }

  }

  checkReadySendProject() {
    if (
      this.state.title.length >= 5 &&
      this.state.description.length > 5
    ) {
      this.setState({ disabledBtn: false });
    }
    this.setState({ disabledBtn: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setView(this.backPage);
    const body = {};
    body.title = this.state.title;
    body.description = this.state.description;
    let request = '';
    if (this.backPage.match(/(project)/i)) {
      body.users = this.state.linkedUsers;
      request = '/api/project?notify=off';
    } else if (this.backPage.match(/(ticket)/i)) {
      body.assigneeId = this.assigneeId;
      body.priority = this.priorityId;
      body.typeId = this.typeId;
      body.projectId = this.state.projectId;
      body.dueDate = this.state.dueDate;
      request = '/api/tickets?notify=off';
    }

    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    fetch(request, settings)
      .then(res => res.json())
      .then(data => this.props.setView(this.backPage))
      .catch(err => console.error('Fetch failed!', err));
  }

  renderProject() {
    const titleValue = this.state.title;
    const descriptionValue = this.state.description;
    const userList = this.state.users.map((value, index) => {
      if (!this.state.linkedUsers.includes(value.id)) {
        return (
          <option key={index} value={value.id}>{value.name}</option>
        );
      }
    }
    );
    const linkedList = this.state.linkedUsers.map((value, index) => {
      if (this.state.users[0] !== 'No Data Received') {
        return (
          <tr key={index}>
            <td>{this.state.users[value - 1].name}</td>
          </tr>
        );
      }

    });

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
          <textarea className="form-control" name='description' value={descriptionValue} onChange={this.handleChange} />
        </label>
        <div className="form-group">
          <label>
              Add A User To The Project:
            <select className="form-control clickable" name="select" onChange={this.handleChange}>
              <option value='0' >Add User</option>
              {userList}
            </select>
          </label>
          <table>
            <thead>
              <tr>
                <th>Linked Users</th>
              </tr>
            </thead>
            <tbody>
              {linkedList}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success" disabled={this.state.disabledBtn} type="submit">Submit</button>
      </form>
    );
  }

  renderTicket() {
    const projects = this.state.projects.map((value, index) => {
      if (this.state.projects[0] !== 'No Data Received') {
        return (<option key={index} value={value.projectId}>{value.projectTitle}</option>);
      }
    }
    );
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Choose A Project:
            <select className="form-control clickable" name="projectSelect" onChange={this.handleChange}>
              <option value='0' >Choose Project</option>
              {projects}
            </select>
          </label>
          {this.renderTicketChosenProject()}
        </div>

      </form>
    );
  }

  renderTicketChosenProject() {
    const titleValue = this.state.title;
    const descriptionValue = this.state.description;
    const dueDateValue = this.state.dueDate;
    if (this.state.users[0] !== 'No Data Received') {
      const userList = this.state.users.map((value, index) => {
        return (<option key={index} value={value.userId}>{value.name}</option>);
      }
      );
      return (
        <div>
          <div className="form-group">
            <label>
              Title:
              <input className="form-control" name='title' type="text" value={titleValue} onChange={this.handleChange} />
            </label>
          </div>
          <label>
            Description:
            <textarea className="form-control" name='description' value={descriptionValue} onChange={this.handleChange} />
          </label>
          <div className="form-group">
            <label>
              Due Date:
              <input placeholder="yyyy-mm-dd" maxLength="10" className="form-control" name='dueDate' type="text" value={dueDateValue} onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Assign A User To The Ticket:
              <select className="form-control clickable" name="assigneeSelect" onChange={this.handleChange}>
                <option value='0' >Assign User</option>
                {userList}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Status Code:
              <select className="form-control clickable" name="statusSelect" onChange={this.handleChange}>
                <option value='1' >Open</option>
                <option value='2' >In-Progress</option>
                <option value='3' >Closed</option>
              </select>
            </label>

            <label>
              Priority Level:
              <select className="form-control clickable" name="prioritySelect" onChange={this.handleChange}>
                <option value='4' >Low</option>
                <option value='3' >Medium</option>
                <option value='2' >High</option>
                <option value='1' >Urgent</option>
              </select>
            </label>
            <label>
              Type:
              <select className="form-control clickable" name="statusSelect" onChange={this.handleChange}>
                <option value='1' >Issue</option>
                <option value='2' >Feature</option>
              </select>
            </label>
          </div>
          <button className="btn btn-success" disabled={this.state.disabledBtn} type="submit">Submit</button>
        </div>
      );
    } else {
      return null;
    }

  }

  render() {
    if (this.backPage.match(/(project)/i)) {
      return this.renderProject();
    } else if (this.backPage.match(/(ticket)/i)) {
      return this.renderTicket();
    }
  }
}
