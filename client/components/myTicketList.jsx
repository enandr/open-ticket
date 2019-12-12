import React from 'react';
import MyTicket from './myTicket';

export default class MyTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTickets: [],
      search: '',
      searchType: 'ticketTitle'
    };
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {

    this.getMyTickets();
  }

  getMyTickets() {

    const request = `/api/tickets?projectId=${this.props.projectId}&userId=${this.props.userId}`;

    fetch(request)
      .then(res => res.json())
      .then(data => this.setState({ myTickets: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  searchOrFilter(event) {
    const newState = {};
    newState.search = event.target.value;
    newState.searchType = event.target.name;

    this.setState(newState);

  }

  render() {
    const ticketArray = this.state.myTickets.map((value, index) => {
      if (value[this.props.searchType].toLowerCase().includes(this.props.search.toLowerCase())) {
        return (<MyTicket key={index} value={value} setView={this.props.setView} setTicketId={this.props.setTicketId}/>);
      }
    });

    return (
      <div>
        <input className="form-control" name="ticketTitle" type="text" placeholder="Search" aria-label="Search" onChange={this.searchOrFilter}></input>
        <table className="table table-bordered clickable">
          <tbody>{ticketArray}</tbody>
        </table>
      </div>
    );
  }
}
