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
    let footerClass = 'footer d-flex justify-content-around ';
    if (this.props.view.match(/(project)/i)) {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myProjectList';
        footerClass += 'color';
      } else {
        backView = 'teamProjectList';
        footerClass += 'color2 text-white';
      }
    } else {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myTicketList';
        footerClass += 'color';
      } else {
        backView = 'teamTicketList';
        footerClass += 'color2 text-white';
      }

    }
    return (
      <footer className={footerClass}>
        <div className="row navbar">
          <div className="col-4 text-center" onClick={() => this.props.setView('myProjectList')}>
            <CheckIcon />
            <p className="navText">My Tasks</p>
          </div>
          <div className="col-4 text-center" onClick={() => this.props.setView('create', backView)}>
            <PlusCircleIcon />
            <p className="navText">Create</p>
          </div>
          <div className="col-4 text-center" onClick={() => this.props.setView('teamProjectList')}>
            <GridIcon />
            <p className="navText">Board</p>
          </div>
        </div>
      </footer>
    );
  }

}
