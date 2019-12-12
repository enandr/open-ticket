import React from 'react';
import MenuIcon from './menuIcon';

export default class TeamTicketListNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg teamProject fixed-top justify-content-center">
        <a className="navbar-brand whiteText text-center">Team Tickets</a>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle whiteText" href="#" id="navbardrop" data-toggle="dropdown">
            <MenuIcon/>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">Filter by Priority:</div>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('', 'statusCode'); }}>All</a>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('Open', 'statusCode'); }}>Open</a>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('In-Progress', 'statusCode'); }}>In-Progress</a>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('Closed', 'statusCode'); }}>Closed</a>
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Filter by Type:</div>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('', 'ticketType'); }}>All</a>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('Feature', 'ticketType'); }}>Feature</a>
            <a className="dropdown-item" href="#" onClick={() => { this.props.onChange('Issue', 'ticketType'); }}>Issue</a>
          </div>
        </div>
      </nav>
    );
  }
}
