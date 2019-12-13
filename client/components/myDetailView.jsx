import React from 'react';
import CircleIcon from './circleIcon';
export default class MyDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketDetails: {},
      description: '',
      dueDate: '',
      createdAt: '',
      priority: null,
      status: null
    };
    this.getMyTickets = this.getMyTickets.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getMyTickets();
  }

  getMyTickets() {

    const request = `/api/tickets?projectId=0&ticketId=${this.props.ticketId}`;

    fetch(request)
      .then(res => res.json())
      .then(data => {
        const stateObj = {
          ticketDetails: data[0],
          description: data[0].description,
          dueDate: data[0].dueDate,
          createdAt: data[0].createdAt.slice(0, 10),
          status: data[0].statusCode,
          priority: data[0].priorityLevel
        };
        this.setState(stateObj);
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  handleChange(event) {
    const stateObj = {};
    stateObj[event.target.name] = event.target.value;
    this.setState(stateObj);
  }

  editRender() {
    const details = this.state.ticketDetails;
    return (
      <div>

        <h1 className="text-center">{details.title}</h1>

        <div className="container text-center detailText">

          <div className="row">
            <div className="col-sm">
              <small>Assignee: {details.assigneeName}</small>
            </div>
            <div className="col-sm">
              <small>Priority: <select defaultValue={this.state.priority} className="form-control" name="priority" onChange={this.handleChange}>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
                <option value='Urgent'>Urgent</option>
              </select>
              </small>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <small>Due Date: <input type="date" name="dueDate" onChange={this.handleChange} maxLength="10" className="form-control" defaultValue={this.state.dueDate}></input></small>
            </div>
            <div className="col-sm">
              <small>Created At: {this.state.createdAt}</small>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <small>Status:
                <select defaultValue={this.state.status} className="form-control" name="status" onChange={this.handleChange}>
                  <option value='Open'>Open</option>
                  <option value='In-Progress'>In-Progress</option>
                  <option value='Closed'>Closed</option>
                </select>
              </small>
            </div>

          </div>

        </div>
        <br></br>
        <p className="text-center"><textarea name="description" onChange={this.handleChange} className="form-control" defaultValue={this.state.description}></textarea></p>
        <img src={details.fileUrl} className="img-fluid" alt="Responsive image"></img>

      </div>
    );

  }

  sendEdit() {
    const details = this.state.ticketDetails;
    if (this.state.ticketDetails.description !== undefined) {
      const body = {
        dueDate: '',
        description: '',
        title: '',
        priority: '',
        statusCodeId: '',
        ticketId: ''
      };
      switch (this.state.status) {
        case 'Open':
          body.statusCodeId = 1;
          break;
        case 'In-Progress':
          body.statusCodeId = 2;
          break;
        case 'Closed':
          body.statusCodeId = 3;
          break;
      }
      switch (this.state.priority) {
        case 'Low':
          body.priority = 4;
          break;
        case 'Medium':
          body.priority = 3;
          break;
        case 'High':
          body.priority = 2;
          break;
        case 'Urgent':
          body.priority = 1;
          break;
      }
      body.dueDate = this.state.dueDate;
      body.description = this.state.description;
      body.title = details.title;
      body.ticketId = this.props.ticketId;
      const settings = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

      };
      fetch('/api/tickets', settings)
        .then(res => res.json())
        .catch(err => console.error(err));
    }
  }

  defaultRender() {
    const details = this.state.ticketDetails;
    const imageUrl = details.fileUrl;
    this.sendEdit();

    return (
      <div className="container pt-2">
        <div className="card pt-2">
          <h1 className="text-center">{details.title}</h1>

          <div className="container text-center detailText">
            <div className="row">
              <div className="col-sm">
                <small>Assignee: <strong>{details.assigneeName}</strong></small>
              </div>
              <div className="col-sm">
                <small>Priority: {this.state.priority}</small>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <small>Due Date: {this.state.dueDate}</small>
              </div>
              <div className="col-sm">
                <small>Created At: {this.state.createdAt}</small>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <small>Status: {this.state.status} </small>
                <CircleIcon fill={this.state.status}/>
              </div>

            </div>

          </div>
          <br></br>
          <p className="text-center">Description: {this.state.description}</p>
          {/* <img src={details.fileUrl} className="img-fluid" alt="Responsive image"></img> */}
          <div className="text-center justify-content-center" style={{ backgroundImage: `url(${imageUrl})`, height: '50vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          {/* <img src={details.fileUrl} className="img-fluid" alt=""></img> */}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.edit === false) {
      return (
        this.defaultRender()
      );
    } else {
      return (
        this.editRender()
      );
    }

  }
}
