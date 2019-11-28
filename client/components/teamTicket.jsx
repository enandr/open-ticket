import React from 'react';

export default function TeamTicket(props) {
  return (
    <div>
      <button onClick={() => props.setView('teamProjectList')}>Back</button>
      <h1 onClick={() => props.setView('teamDetailView')}>TEAM TICKET ---</h1>
      <button onClick={() => props.setView('myProjectList')}>
        My Projects
      </button>
      <button onClick={() => props.setView('teamProjectList')}>
        Team Projects
      </button>
    </div>
  );
}
