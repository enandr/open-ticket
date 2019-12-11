import React from 'react';

export default class TeamTicketListNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg teamProject fixed-top justify-content-center">
        <a className="navbar-brand whiteText text-center">Team Tickets</a>
        <select name="statusCode" onChange={this.props.onChange} className="form-control col-3 ml-3">
          <option value="">All</option>
          <option value="Open" >Open</option>
          <option value="In-Progress" >In-Progress</option>
          <option value="Closed" >Closed</option>
        </select>
        <select name="ticketType" onChange={this.props.onChange} className="form-control col-3">
          <option value="">All</option>
          <option value="Feature">Feature</option>
          <option value="Issue" >Issue</option>
        </select>
      </nav>
    );
  }
}
