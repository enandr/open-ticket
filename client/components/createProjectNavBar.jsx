import React from 'react';
import BackIcon from './backIcon';

export default class CreateProjectNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg createProjectNavBarColor fixed-top">
        <div className="clickable" onClick={() => {
          this.props.setView(this.props.backpage);
        }}><BackIcon/></div>
        <a className="navbar-brand clickable">New Project</a>
      </nav>
    );
  }
}
