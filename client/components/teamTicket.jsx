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
            <div className="col-10">
              <strong className="ticketTitle">{props.value.ticketTitle}</strong>
              <div className="row">

                <div className="col-sm">
                  <small className="ticketInfo listText">Status: {props.value.statusCode}</small>
                </div>
                <div className="col-sm">
                  <small className="ticketInfo listText">Type: {props.value.ticketType}</small>
                </div>

              </div>

              <div className="row">
                <div className="col-sm">
                  <small className="ticketInfo listText">Assignee: <strong>{props.value.assigneeName}</strong></small>
                </div>
                <div className="col-sm">
                  <small className="ticketInfo listText">Priority: {props.value.priorityLevel}</small>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">

                  <small className="ticketInfo listText">Due Date: {props.value.dueDate}</small>

                </div>
                <div className="col-sm">
                  <small className="ticketInfo listText">Created At: {props.value.createdAt.slice(0, 10)}</small>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Circle fill={props.value.statusCode} />
              <Chevron />
            </div>
          </div>
        </div>

      </td>
    </tr>
  );
}
