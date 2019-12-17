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
      case 'projectId':
        if (event.target.value !== '0') {
          this.setState({ projectId: parseInt(event.target.value) }, () => {
            fetch(`api/users?projectId=${this.state.projectId}`)

              .then(res => res.json())
              .then(data => this.setState({ users: data }))
              .catch(err => console.error('Fetch failed!', err));
          });
        }
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
      this.state.dueDate.length >= 9
    ) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }

  }

  checkReadySendProject() {
    if (
      this.state.title.length >= 5 &&
      this.state.description.length >= 5
    ) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }

  }

  handleSubmit(event) {
    this.setState({ disabledBtn: true });
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('users', this.state.linkedUsers);
    let request = '';
    if (this.backPage.match(/(project)/i)) {
      request = '/api/project?notify=on';
    } else if (this.backPage.match(/(ticket)/i)) {
      request = '/api/tickets?notify=on';
    }

    const settings = {
      method: 'POST',
      body: formData
    };
    fetch(request, settings)
      .then(res => res.json())
      .then(data => {
        this.props.setView(this.backPage);
      })
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
      <div className="container pt-2">
        <form onSubmit={this.handleSubmit} className="card pt-2">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="form-group w-75">
              <label>
              Title:
                <input className="form-control" maxLength="30" name='title' type="text" value={titleValue} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-group w-75">
              <label>
              Description:
                <textarea className="form-control" maxLength="124" name='description' value={descriptionValue} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-group w-75">
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
            <button className="btn btn-primary w-75" disabled={this.state.disabledBtn} type="submit">Submit</button>
          </div>
        </form>

      </div>
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
      <div className="container">
        <form id="createForm card" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
            Choose A Project:
              <select className="form-control clickable" name="projectId" onChange={this.handleChange}>
                <option value='0' >Choose Project</option>
                {projects}
              </select>
            </label>
            {this.renderTicketChosenProject()}
          </div>

        </form>
      </div>
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
              <input maxLength="30" className="form-control" name='title' type="text" value={titleValue} onChange={this.handleChange} />
            </label>
          </div>
          <label>
            Description:
            <textarea maxLength="124" className="form-control" name='description' value={descriptionValue} onChange={this.handleChange} />
          </label>
          <div className="form-group">
            <label>
              Due Date:
              <input placeholder="yyyy-mm-dd" maxLength="10" className="form-control" name='dueDate' type="date" value={dueDateValue} onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Assign A User To The Ticket:
              <select className="form-control clickable" name="assigneeId" onChange={this.handleChange}>
                {userList}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Status Code:
              <select className="form-control clickable" name="statusSelect" onChange={this.handleChange}>
                <option value='1' >Open</option>
              </select>
            </label>

            <label>
              Priority Level:
              <select className="form-control clickable" name="priority" onChange={this.handleChange}>
                <option value='4' >Low</option>
                <option value='3' >Medium</option>
                <option value='2' >High</option>
                <option value='1' >Urgent</option>
              </select>
            </label>
            <label>
              Type:
              <select className="form-control clickable" name="typeId" onChange={this.handleChange}>
                <option value='1' >Issue</option>
                <option value='2' >Feature</option>
              </select>
            </label>
          </div>
          <input type="file" name="image" id="fileToUpload" onChange={this.handleChange}></input>
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
