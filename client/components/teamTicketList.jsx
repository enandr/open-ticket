import React from 'react';
import TeamTicket from './teamTicket';
import NoTickets from '../../server/public/images/NoTickets.png';

export default class TeamTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamTickets: [],
      loaded: 'false',
      search: '',
      searchType: 'ticketTitle'
    };
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {
    this.getTeamTickets();
  }

  getTeamTickets() {
    const request = `/api/tickets?projectId=${this.props.projectId}`;
    fetch(request)
      .then(res => res.json())
      .then(data => this.setState({ teamTickets: data, loaded: 'true' }))
      .catch(err => console.error('Fetch failed!', err));
  }

  searchOrFilter(event) {
    const newState = {};
    newState.search = event.target.value;
    newState.searchType = event.target.name;

    this.setState(newState);
  }

  render() {
    const teamTicketArray = this.state.teamTickets.map((value, index) => {
      if (value[this.state.searchType].toLowerCase().includes(this.state.search.toLowerCase())) {
        return (<TeamTicket key={index} value={value} setView={this.props.setView} setTicketId={this.props.setTicketId} />);
      }
    });

    if (!this.state.teamTickets[0] && this.state.loaded === 'true') {
      return (
        <img src={NoTickets} width='350' height='600' />
      );
    } else {
      return (
        <div>
          <select name="statusCode" onChange={this.searchOrFilter}>
            <option value="">All</option>
            <option value="Open" >Open</option>
            <option value="In-Progress" >In-Progress</option>
            <option value="Closed" >Closed</option>
          </select>
          <select name="ticketType" onChange={this.searchOrFilter}>
            <option value="">All</option>
            <option value="Feature">Feature</option>
            <option value="Issue" >Issue</option>
          </select>
          <input className="form-control " name="ticketTitle" type="text" placeholder="Search" aria-label="Search" onChange={this.searchOrFilter}></input>
          <table className="table table-bordered">
            <tbody>{teamTicketArray}</tbody>
          </table>
        </div>
      );
    }
  }
}
