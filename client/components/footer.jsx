import React from 'react';
import CheckIcon from './CheckIcon';
import PlusCircleIcon from './PlusCircleIcon';
import GridIcon from './GridIcon';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backView: 'myProjectList'
    };
  }

  render() {
    let backView = '';
    const footerClass = 'footer text-center d-flex justify-content-around color1';
    let myTasksColor = 'black';
    const createColor = 'black';
    let boardColor = 'black';
    if (this.props.view.match(/(project)/i)) {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myProjectList';
        myTasksColor = 'orange';
      } else {
        backView = 'teamProjectList';
        boardColor = 'orange';
      }
    } else {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myTicketList';
        myTasksColor = 'orange';
      } else {
        backView = 'teamTicketList';
        boardColor = 'orange';
      }

    }
    return (
      <footer className={footerClass}>
        <div className="row navbar">
          <div className="col-4 text-center clickable" onClick={() => this.props.setView('myProjectList')}>
            <CheckIcon color={myTasksColor}/>
            <p className="navText">My Tasks</p>
          </div>
          <div className="col-4 text-center clickable" onClick={() => this.props.setView('create', backView)}>
            <PlusCircleIcon color={createColor}/>
            <p className="navText">Create</p>
          </div>
          <div className="col-4 text-center clickable" onClick={() => this.props.setView('teamProjectList')}>
            <GridIcon color={boardColor}/>
            <p className="navText">Board</p>
          </div>
        </div>
      </footer>
    );
  }

}
