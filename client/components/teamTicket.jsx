import React from 'react';

export default function TeamTicket(props) {
  return (
    <div>

      <h1 onClick={() => props.setView('teamDetailView')}>TEAM TICKET ---</h1>

    </div>
  );
}
