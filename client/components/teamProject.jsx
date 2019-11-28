import React from 'react';

export default function TeamProject(props) {
  return (
    <div>
      <h1 onClick={() => props.setView('teamTicketList')}>
        TEAM PROJECTS ---
      </h1>

    </div>
  );
}
