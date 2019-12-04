import React from 'react';
import MyTicket from './myTicket';

export default class MyTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTickets: []
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false }));

    this.getMyTickets();
  }

  getMyTickets() {

    const request = `/api/tickets?projectId=${this.props.projectId}&userId=${this.props.userId}`;

    fetch(request)
      .then(res => res.json())
      .then(data => this.setState({ myTickets: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const ticketArray = this.state.myTickets.map((value, index) => (
      <MyTicket
        key={index}
        value={value}
        setView={this.props.setView}

      />
    ));

    return (
      <table className="table table-bordered">
        <tbody>{ticketArray}</tbody>
      </table>
    );
  }
}
