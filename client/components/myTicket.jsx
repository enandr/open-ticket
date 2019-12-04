import React from 'react';

export default function MyTicket(props) {
  return (
    <tr onClick={() => {
      props.setView('myTicketList');
      props.setProjectId(props.value.projectId);
    }}>
      <td>
        <strong>{props.value.ticketTitle}</strong>
        <p>
          <small>{props.value.statusCode}</small>
        </p>
      </td>
    </tr>
  );
}
