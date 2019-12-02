import React from 'react';

export default function MyTicket(props) {
  return (
    <div>
      <h1 onClick={() => props.setView('myDetailView')}>Ticket Item Goes Here</h1>
    </div>
  );
}
