import React from 'react';
import CheckIcon from './CheckIcon';
import PlusCircleIcon from './PlusCircleIcon';
import GridIcon from './GridIcon';

export default function MyProjectListFooter(props) {
  return (
    <footer className="footer">
      <div className="row h-100">
        <div
          className="col text-center"
          onClick={() => props.setView('myProjectList')}
        >
          <CheckIcon />
          <p>My Tasks</p>
        </div>
        <div
          className="col text-center"
          onClick={() => props.setView('create', 'myTicketList')}
        >
          <PlusCircleIcon />
          <p>Create</p>
        </div>
        <div
          className="col text-center"
          onClick={() => props.setView('teamProjectList')}
        >
          <GridIcon />
          <p>Board</p>
        </div>
      </div>
    </footer>
  );
}
