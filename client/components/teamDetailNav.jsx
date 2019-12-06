import React from 'react';
import BackIcon from './backIcon';

export default function TeamDetailNav(props) {
  return (
    <nav className="navbar navbar-expand-lg teamProject fixed-top">
      <div className="clickable whiteText" onClick={() => {
        props.setView('teamTicketList');
      }}><BackIcon /></div>
      <a className="navbar-brand whiteText">Ticket Detail View</a>
    </nav>
  );
}
