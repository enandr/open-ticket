import React from 'react';
import LogOut from './logoutIcon';
import MenuIcon from './menuIcon';
import BackIcon from './backIcon';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: 'Edit'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.editing === 'Edit') {
      this.setState({ editing: 'Save' });
      this.props.edit(true);
    } else {
      this.setState({ editing: 'Edit' });
      this.props.edit(false);
    }

  }

  renderTeamTicketList() {
    return (
      <nav className="navbar  teamProject fixed-top">
        <a className="nav-link"><MenuIcon /></a>
        <a className="navTitle text-white mx-auto ">Team Tickets</a>
        <div className="nav-item dropdown">
          <a className="nav-link text-white" href="#" id="navbardrop" data-toggle="dropdown">
            <MenuIcon />
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

  renderTeamProjects() {
    return (
      <nav className="navbar navHeight teamProject fixed-top justify-content-center">
        <a className="navTitle text-white">Team Projects</a>
      </nav>
    );
  }

  renderMyTickets() {
    return (
      <nav className="navbar color fixed-top">
        <a className="nav-link"><MenuIcon /></a>
        <a className="navTitle mx-auto ">My Tickets</a>
        <div className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
            <MenuIcon />
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

  renderMyProjects() {
    return (
      <nav className="navbar navHeight color fixed-top">
        <a className="navTitle">Projects</a>
        <LogOut setView={this.props.setView} />
      </nav>
    );
  }

  renderCreate() {
    return (
      <nav className="navbar createProjectNavBarColor fixed-top">
        <div className="clickable" onClick={() => {
          this.props.setView(this.props.backpage);
        }}><BackIcon /></div>
        <a className="navTitle clickable">Create</a>
      </nav>
    );
  }

  renderTeamDetail() {
    return (
      <nav className="navbar navbar-expand-lg teamProject fixed-top">
        <div className="clickable whiteText" onClick={() => {
          this.props.setView('teamTicketList');
        }}><BackIcon /></div>
        <a className="navbar-brand whiteText">Ticket Detail View</a>
      </nav>
    );
  }

  renderMyDetail() {
    return (
      <nav className="navbar navbar-expand-lg color fixed-top">
        <div className="clickable" onClick={() => {
          this.props.setView('myTicketList');
        }}><BackIcon /></div>
        <a className="navbar-brand">Ticket Details</a>
        <a className="navbar-brand clickable" onClick={this.handleClick}>{this.state.editing}</a>
      </nav>
    );
  }

  render() {
    if (this.props.view.match(/team/i) && this.props.view.match(/ticket/i)) {
      return this.renderTeamTicketList();
    }
    if (this.props.view.match(/team/i) && this.props.view.match(/project/i)) {
      return this.renderTeamProjects();
    }
    if (this.props.view.match(/my/i) && this.props.view.match(/ticket/i)) {
      return this.renderMyTickets();
    }
    if (this.props.view.match(/my/i) && this.props.view.match(/detail/i)) {
      return this.renderMyTickets();
    }
    if (this.props.view.match(/team/i) && this.props.view.match(/detail/i)) {
      return this.renderTeamTickets();
    }
    if (this.props.view.match(/create/i)) {
      return this.renderCreate();
    }
    return this.renderMyProjects();

  }
}
