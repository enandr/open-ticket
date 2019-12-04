import React from 'react';
import MyProjectList from './myProjectList';
import MyTicketList from './myTicketList';
import MyDetailView from './myDetailView';
import TeamProjectList from './teamProjectList';
import TeamTicketList from './teamTicketList';
import TeamDetailView from './teamDetailView';
import MyProjectListNav from './myProjectListNav';
import MyProjectListFooter from './myProjectListFooter';
import TeamProjectListFooter from './teamProjectListFooter';
import TeamProjectListNav from './teamProjectListNav';
import MyTicketListNav from './myTicketListNav';
import MyTicketListFooter from './myTicketListFooter';
import TeamTicketListNav from './teamTicketListNav';
import TeamTicketListFooter from './teamTicketListfooter';
import CreateProjectNavBar from './createProjectNavBar';
import Create from './create';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isTesting: true,
      view: 'myProjectList',
      projectId: null
    };
    this.userId = 2;
    this.setProjectId = this.setProjectId.bind(this);
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    /*     fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false })); */
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  setProjectId(id) {
    // alert(id);
    this.setState({ projectId: id });
  }

  render() {
    if (this.state.view === 'myProjectList') {
      return (
        <div>
          <MyProjectListNav/>
          <MyProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.userId}/>
          <MyProjectListFooter setView={this.setView}/>

        </div>
      );
    } else if (this.state.view === 'myTicketList') {
      return (
        <div>
          <MyTicketListNav />
          <MyTicketList
            setView={this.setView}
            projectId={this.state.projectId}
            userId={this.userId}
          />
          <MyTicketListFooter setView={this.setView} />
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
          <TeamProjectListNav setView={this.setView} />
          <TeamProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.userId}/>
          <TeamProjectListFooter setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamTicketList') {
      return (
        <div>
          <TeamTicketListNav setView={this.setView}/>
          <TeamTicketList setView={this.setView} userId={this.userId} projectId={this.state.projectId} />
          <TeamTicketListFooter setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamDetailView') {
      return (
        <div>
          <TeamDetailView setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'createProject') {
      return (
        <div>
          <CreateProjectNavBar setView={this.setView} />
          <Create setView={this.setView} />
        </div>
      );
    }
  }
}
