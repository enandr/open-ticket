import React from 'react';
import CheckIcon from './CheckIcon';
import PlusCircleIcon from './PlusCircleIcon';
import GridIcon from './GridIcon';
import AccountIcon from './accountIcon';

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
    let accountColor = 'black';
    if (this.props.view.match(/(project)/i)) {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myProjectList';
        myTasksColor = 'orange';
      } else {
        backView = 'teamProjectList';
        boardColor = 'orange';
      }
    } else if (this.props.view.match(/(ticket)/i)) {
      if (this.props.view.match(/(my)/i)) {
        backView = 'myTicketList';
        myTasksColor = 'orange';
      } else {
        backView = 'teamTicketList';
        boardColor = 'orange';
      }
    } else if (this.props.view.match(/(account)/i)) {
      if (this.props.view.match(/(account)/i)) {
        backView = 'myTicketList';
        accountColor = 'orange';
      } else {
        backView = 'teamTicketList';
        accountColor = 'orange';
      }
    }
    return (
      <footer className={footerClass}>
        <div className="row navbar">
          <div className="col-3 text-center clickable" onClick={() => this.props.setView('myProjectList')}>
            <CheckIcon color={myTasksColor}/>
            <p className="navText">Tickets</p>
          </div>
          <div className="col-3 text-center clickable" onClick={() => this.props.setView('create', backView)}>
            <PlusCircleIcon color={createColor}/>
            <p className="navText">Create</p>
          </div>
          <div className="col-3 text-center clickable" onClick={() => this.props.setView('teamProjectList')}>
            <GridIcon color={boardColor}/>
            <p className="navText">Board</p>
          </div>
          <div className="col-3 text-center clickable" onClick={() => this.props.setView('account')}>
            <AccountIcon color={accountColor} />
            <p className="navText">Account</p>
          </div>
        </div>
      </footer>
    );
  }

}
