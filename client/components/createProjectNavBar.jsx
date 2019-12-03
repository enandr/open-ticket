import React from 'react';
import BackIcon from './backIcon';

export default function CreateProjectNavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg createProjectNavBarColor fixed-top">
      <div onClick={() => props.setView('myProjectList')}><BackIcon/></div>
      <a className="navbar-brand">New Project</a>
    </nav>
  );
}
