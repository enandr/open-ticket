import React from 'react';
import CheckIcon from './CheckIcon';
import PlusCircleIcon from './PlusCircleIcon';
import GridIcon from './GridIcon';

export default function MyProjectListFooter(props) {
  return (
    <footer className="footer d-flex justify-content-around">
      <div className="row navbar">
        <div className="col-4 text-center" onClick={() => props.setView('myProjectList')}>
          <CheckIcon/>
          <p className="navText">My Tasks</p>
        </div>
        <div className="col-4 text-center" onClick={() => props.setView('create', 'myProjectList')}>
          <PlusCircleIcon/>
          <p className="navText">Create</p>
        </div>
        <div className="col-4 text-center" onClick={() => props.setView('teamProjectList')}>
          <GridIcon/>
          <p className="navText">Board</p>
        </div>
      </div>
    </footer>
  );
}
