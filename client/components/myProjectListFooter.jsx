import React from 'react';
import CheckIcon from './CheckIcon';
import PlusCircleIcon from './PlusCircleIcon';
import GridIcon from './GridIcon';

export default function MyProjectListNav(props) {
  return (
    <footer className="footer">
      <div className="row h-100">
        <div className="col text-center">
          <CheckIcon />
          <p>My Tasks</p>
        </div>
        <div className="col text-center">
          <PlusCircleIcon />
          <p>Create</p>
        </div>
        <div className="col text-center">
          <GridIcon />
          <p>Board</p>
        </div>
      </div>
    </footer>
  );
}
