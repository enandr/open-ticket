import React from 'react';
import LogOut from './logoutIcon';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className="navbar color fixed-top">
        <a className="navTitle">Projects</a>
        <LogOut setView={this.props.setView}/>
      </nav>
    );
  }
}
