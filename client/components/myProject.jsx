import React from 'react';

export default function MyProject(props) {

  return (
    <tr className="projectRows"
      onClick={() => {
        props.setView('myTicketList');
        props.setProjectId(props.value.projectId);
      }}
    >
      <td className="projectData align-middle">
        <strong className="projecTitleFont">{props.value.projectTitle}</strong>
        <p className="projectDescriptionFont my-0">
          {props.value.description}
        </p>
      </td>
    </tr>
  );
}
