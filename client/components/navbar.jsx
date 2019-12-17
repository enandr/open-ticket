import React from 'react';
import MenuIcon from './menuIcon';
import BackIcon from './backIcon';
import EditIcon from './EditIcon';
import SaveIcon from './SaveIcon';
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

  renderIcon() {

    if (this.state.editing === 'Edit') {
      return (
        <EditIcon/>
      );
    } else {
      return (
        <SaveIcon />
      );
    }

  }

  renderTeamTicketList() {
    return (
      <nav className="navbar navHeight teamProject fixed-top">
        <div className="clickable text-white" onClick={() => {
          this.props.setView(this.props.backpage);
        }}><BackIcon /></div>
        <a className="navTitle text-white mx-auto ">Team Tickets</a>
        <div className="nav-item dropdown">
          <a className="text-white" href="#" id="navbardrop" data-toggle="dropdown">
            <MenuIcon />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">Filter by Status:</div>
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
      <nav className="navbar navbar-expand-lg color fixed-top navHeight">
        <div className="clickable" onClick={() => {
          this.props.setView(this.props.backpage);
        }}><BackIcon /></div>
        <a className="navTitle mx-auto ">My Tickets</a>
        <div className="nav-item dropdown">
          <a className="text-dark" href="#" id="navbardrop" data-toggle="dropdown">
            <MenuIcon/>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">Filter by Status:</div>
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
      <nav className="navbar navHeight color fixed-top justify-content-center">
        <a className="navTitle">Projects</a>
      </nav>
    );
  }

  renderCreate() {
    return (
      <nav className="navbar createProjectNavBarColor fixed-top navHeight">
        <div className="clickable" onClick={() => {
          this.props.setView(this.props.backpage);
        }}><BackIcon /></div>
        <a className="navTitle clickable mx-auto">Create</a>
      </nav>
    );
  }

  renderTeamDetail() {
    return (
      <nav className="navbar navbar-expand-lg teamProject fixed-top navHeight">
        <div className="clickable text-white" onClick={() => {
          this.props.setView('teamTicketList');
        }}><BackIcon /></div>
        <a className="text-white mx-auto navTitle">Ticket Detail View</a>
      </nav>
    );
  }

  renderMyDetail() {
    return (
      <nav className="navbar navbar-expand-lg color fixed-top navHeight">
        <div className="clickable" onClick={() => {
          this.props.setView('myTicketList');
        }}><BackIcon /></div>
        <a className="navTitle mx-auto">Ticket Details</a>
        <a className="clickable" onClick={this.handleClick}>{this.renderIcon()}</a>
      </nav>
    );
  }

  renderAccount() {
    return (
      <nav className="navbar navHeight color fixed-top justify-content-center">
        <a className="navTitle">Account</a>
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
      return this.renderMyDetail();
    }
    if (this.props.view.match(/team/i) && this.props.view.match(/detail/i)) {
      return this.renderTeamDetail();
    }
    if (this.props.view.match(/create/i)) {
      return this.renderCreate();
    }
    if (this.props.view.match(/account/i)) {
      return this.renderAccount();
    }
    return this.renderMyProjects();

  }
}
