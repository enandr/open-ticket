import React from 'react';
import BackIcon from './backIcon';
class MyDetailNav extends React.Component {
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

  render() {
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
}
export default MyDetailNav;
