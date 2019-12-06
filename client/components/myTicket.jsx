import React from 'react';
import Chevron from './chevronRight';
export default function MyTicket(props) {

  return (
    <tr onClick={() => {

      props.setView('myDetailView');
      props.setTicketId(props.value.id);

    }}>
      <td>
        <strong>{props.value.ticketTitle}</strong>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <small>Status: {props.value.statusCode}</small>
            </div>
            <div className="col-sm">
              <small>Type: {props.value.ticketType}</small>
            </div>

          </div>

          <div className="row">
            <div className="col-sm">
              <small>Assignee: {props.value.assigneeName}</small>
            </div>
            <div className="col-sm">
              <small>Priority: {props.value.priorityLevel}</small>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">

              <small>Due Date: {props.value.dueDate}</small>

            </div>
            <div className="col-sm">
              <small>Created At: {props.value.createdAt}</small>
            </div>
          </div>

        </div>
        <Chevron/>
      </td>
    </tr>
  );
}
