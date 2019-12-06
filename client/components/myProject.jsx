import React from 'react';

export default function MyProject(props) {

  return (
    <tr
      onClick={() => {
        props.setView('myTicketList');
        props.setProjectId(props.value.projectId);
      }}
    >
      <td>
        <strong className="projecTitleFont">{props.value.projectTitle}</strong>
        <p>
          <small className="projectDescriptionFont">{props.value.description}</small>
        </p>
      </td>
    </tr>
  );
}
