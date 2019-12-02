import React from 'react';

export default function MyProject(props) {
  return (
    <tr onClick={() => props.setView('myTicketList')}>
      <td><strong>Project 1</strong>
        <p>
          <small>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</small>
        </p>
      </td>
    </tr>
  );
}
