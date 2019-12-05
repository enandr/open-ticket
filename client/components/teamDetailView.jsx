import React from 'react';

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
      .then(data => this.setState({ ticketDetails: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const details = this.state.ticketDetails[0];

    return (
      <div>
        <button onClick={() => this.props.setView('TeamTicketList')}>Back to Team Ticket List</button>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <p>{details.statusCode}</p>
        <p>{details.priorityLevel}</p>
        <p>{details.assigneeName}</p>
        <p>Due Date: {details.dueDate}</p>
        <p>Created At: {details.createdAt}</p>
      </div>
    );
  }
}
