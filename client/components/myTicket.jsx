import React from 'react';

export default function MyTicket(props) {

  return (
    <tr onClick={() => {

      props.setView('myDetailView');
      props.setTicketId(props.value.id);


    }}>
      <td>
        <strong>{props.value.ticketTitle}</strong>
        <p>
          <small>{props.value.statusCode}</small>
        </p>
        <p>
          <small>{props.value.ticketType}</small>
        </p>

        <p>
          <small>{props.value.assigneeName}</small>
        </p>
        <p>
          <small>{props.value.priorityLevel}</small>

        </p>
        <p>
          <small>Due Date: {props.value.dueDate}</small>
        </p>
        <p>
          <small>Created At: {props.value.createdAt}</small>
        </p>
      </td>
    </tr>
  );
}
