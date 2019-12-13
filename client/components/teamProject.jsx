import React from 'react';
import { ChevronRight } from 'react-feather';

export default function TeamProject(props) {

  return (
    <tr className="projectRows"
      onClick={() => {
        props.setView('teamTicketList');
        props.setProjectId(props.value.projectId);
      }}>
      <td className="projectData align-middle">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <strong className="projecTitleFont">{props.value.projectTitle}</strong>
              <p className="projectDescriptionFont my-0 listText">
                {props.value.description}
              </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <ChevronRight />
            </div>
          </div>
        </div>
      </td>
    </tr>

  );
}
