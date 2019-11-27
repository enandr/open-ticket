import React from 'react';

export default function MyProject(props) {
  return (
    <div onClick={() => props.setView('myTicketList')}>
      <h1>PROJECT</h1>
    </div>
  );
}
