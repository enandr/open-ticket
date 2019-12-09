import React from 'react';
import BackIcon from './backIcon';

export default function MyDetailNav(props) {
  return (
    <nav className="navbar navbar-expand-lg color fixed-top">
      <div className="clickable" onClick={() => {
        props.setView('myTicketList');
      }}><BackIcon /></div>
      <a className="navbar-brand">Ticket Details</a>
      <a className="navbar-brand clickable" onClick={props.edit}>Edit</a>
    </nav>
  );
}
