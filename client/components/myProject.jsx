import React from 'react';

export default function MyProject(props) {
  return (
    <tr onClick={() => props.setView('myTicketList')}>
      <td><strong>{props.value.projectTitle}</strong>
        <p>
          <small>{props.value.description}</small>
        </p>
      </td>
    </tr>
  );
}
