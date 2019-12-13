import React from 'react';
import CircleIcon from './circleIcon';
export default class TeamDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketDetails: ['']
    };
    this.getTeamTickets = this.getTeamTickets.bind(this);
  }

  componentDidMount() {
    this.getTeamTickets();
  }

  getTeamTickets() {

    const request = `/api/tickets?projectId=0&ticketId=${this.props.ticketId}`;

    fetch(request)
      .then(res => res.json())
      .then(data => {
        data = data[0];
        data.createdAt = data.createdAt.slice(0, 10);
        this.setState({ ticketDetails: data });
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const details = this.state.ticketDetails;
    const imageUrl = details.fileUrl;

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
                <small>Priority: {details.priorityLevel}</small>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <small>Due Date: {details.dueDate}</small>
              </div>
              <div className="col-sm">
                <small>Created At: {details.createdAt}</small>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <small>Status: {details.statusCode} </small>
                <CircleIcon fill={details.statusCode} />
              </div>

            </div>

          </div>
          <br></br>
          <p className="text-center">Description: {details.description}</p>
          {/* <img src={details.fileUrl} className="img-fluid" alt="Responsive image"></img> */}
          {/* <div className="text-center justify-content-center"style={{ backgroundImage: `url(${imageUrl})`, height: '50vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div> */}
          {/* <img src={details.fileUrl} className="img-fluid" alt=""></img> */}
          <div className="text-center justify-content-center" style={{ backgroundImage: `url(${imageUrl})`, height: '50vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        </div>
      </div>
    );
  }
}
