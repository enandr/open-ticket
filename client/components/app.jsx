import React from 'react';
import MyProjectList from './myProjectList';
import MyTicketList from './myTicketList';
import MyDetailView from './myDetailView';
import TeamProjectList from './teamProjectList';
import TeamTicketList from './teamTicketList';
import TeamDetailView from './teamDetailView';
import MyProjectListNav from './myProjectListNav';
import MyProjectListFooter from './myProjectListFooter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isTesting: true,
      view: 'myProjectList'
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false }));
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  render() {
    if (this.state.view === 'myProjectList') {
      return (
        <div>
          <MyProjectListNav/>
          <MyProjectList setView={this.setView} />
          <MyProjectListFooter setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'myTicketList') {
      return (
        <div>
          <MyTicketList setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'myDetailView') {
      return (
        <div>
          <MyDetailView setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamProjectList') {
      return (
        <div>
          <TeamProjectList setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamTicketList') {
      return (
        <div>
          <TeamTicketList setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamDetailView') {
      return (
        <div>
          <TeamDetailView setView={this.setView} />
        </div>
      );
    }
  }
}
