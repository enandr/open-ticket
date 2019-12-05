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
import MyDetailNav from './myDetailNav';
import Login from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isTesting: true,
      projectId: null,
      ticketId: null,
      view: 'logIn',
      backPage: null,
      userId: null

    };
    this.setProjectId = this.setProjectId.bind(this);
    this.setTicketId = this.setTicketId.bind(this);
    this.setView = this.setView.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  componentDidMount() {

  }

  setUserId(id) {
    this.setState({ userId: id });
  }

  setView(newView, backPage = null) {
    this.setState({ view: newView, backPage: backPage });
  }

  setProjectId(id) {
    // alert(id);
    this.setState({ projectId: id });
  }

  setTicketId(id) {
    // alert(id);
    this.setState({ ticketId: id });
  }

  render() {
    if (this.state.view === 'logIn') {
      return (
        <div>
          <Login setView={this.setView} setId={this.setUserId}/>
        </div>
      );
    } else if (this.state.view === 'myProjectList') {
      return (
        <div>
          <MyProjectListNav/>
          <MyProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.state.userId}/>
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

            setTicketId={this.setTicketId}

            userId={this.state.userId}

          />
          <MyTicketListFooter setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'myDetailView') {
      return (
        <div>
          <MyDetailNav/>
          <MyDetailView setView={this.setView} ticketId={this.state.ticketId}/>
        </div>
      );
    } else if (this.state.view === 'teamProjectList') {
      return (
        <div>
          <TeamProjectListNav setView={this.setView} />
          <TeamProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.state.userId}/>
          <TeamProjectListFooter setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamTicketList') {
      return (
        <div>
          <TeamTicketListNav setView={this.setView}/>
          <TeamTicketList setView={this.setView} userId={this.state.userId} projectId={this.state.projectId} setTicketId={this.setTicketId}/>
          <TeamTicketListFooter setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamDetailView') {
      return (
        <div>
          <TeamDetailView setView={this.setView} ticketId={this.state.ticketId}/>
        </div>
      );
    } else if (this.state.view === 'create') {
      return (
        <div>
          <CreateProjectNavBar backpage={this.state.backPage} setView={this.setView} />
          <Create backpage={this.state.backPage} setView={this.setView} userId={this.state.userId}/>
        </div>
      );
    }
  }
}
