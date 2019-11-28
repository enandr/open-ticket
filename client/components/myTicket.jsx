import React from 'react';

export default function MyTicket(props) {
  return (
    <div>
      <h1 onClick={() => props.setView('myDetailView')}>MY TICKET ---</h1>
      <button onClick={() => props.setView('myProjectList')}>Go Back to My Project List</button>
    </div>
  );
}
