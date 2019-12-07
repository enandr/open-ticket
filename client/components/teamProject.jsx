import React from 'react';

export default function TeamProject(props) {
  return (
    <tr onClick={() => {
      props.setView('teamTicketList');
      props.setProjectId(props.value.projectId);
    }}>
      <td><strong className="projecTitleFont">{props.value.projectTitle}</strong>
        <p>
          <small className="projectDescriptionFont">{props.value.description}</small>
        </p>
      </td>
    </tr>
  );
}
