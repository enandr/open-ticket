import React from 'react';
import LogOut from './logoutIcon';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LogOut setView={this.props.setView} />
    );
  }
}
