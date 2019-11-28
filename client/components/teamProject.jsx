import React from 'react';

export default function TeamProject(props) {
  return (
    <div>
      <h1 onClick={() => props.setView('teamTicketList')}>
        TEAM PROJECTS ---
      </h1>
      <button onClick={() => props.setView('myProjectList')}>
        My Projects
      </button>
      <button onClick={() => this.props.setView('teamProjectList')}>
        Team Projects
      </button>
    </div>
  );
}
