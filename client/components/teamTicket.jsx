import React from 'react';
import Chevron from './chevronRight';
import Circle from './circleIcon';

export default function TeamTicket(props) {
  return (
    <tr onClick={() => {

      props.setView('teamDetailView');
      props.setTicketId(props.value.id);

    }}>
      <td>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row"></div>
              <div className="row mb-2"><strong>{props.value.ticketTitle}</strong></div>
              <div className="row"></div>
              <div className="row"><small>Status: <small className="font-weight-light text-center">{props.value.statusCode}</small></small></div>
              <div className="row"><small>Type: <small className="font-weight-light">{props.value.ticketType}</small></small></div>
              <div className="row"><small>Assignee: <small className="font-weight-light">{props.value.assigneeName}</small></small></div>
              <div className="row"><small>Priority: <small className="font-weight-light">{props.value.priorityLevel}</small></small></div>
              <div className="row"><small>Due Date: <small className="font-weight-light">{props.value.dueDate}</small></small></div>
              <div className="row"><small>Created At: <small className="font-weight-light">{props.value.createdAt}</small></small></div>
            </div>
            <div className="col-push align-self-center">
              <Circle />
              <Chevron />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
