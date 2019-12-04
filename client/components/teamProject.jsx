import React from 'react';

export default function TeamProject(props) {
  return (
    <tr onClick={() => {
      props.setView('teamTicketList');
      props.setProjectId(props.value.projectId);
    }}>
      <td><strong>{props.value.projectTitle}</strong>
        <p>
          <small>{props.value.description}</small>
        </p>
      </td>
    </tr>
  );
}
