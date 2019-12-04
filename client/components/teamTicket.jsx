import React from 'react';

export default function TeamTicket(props) {
  return (
    <tr>
      <td>
        <strong>{props.value.ticketTitle}</strong>
        <p>
          <small>{props.value.statusCode}</small>
        </p>
      </td>
    </tr>
  );
}
