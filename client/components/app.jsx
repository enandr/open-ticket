import React from 'react';
import MyProjectList from './myProjectList';
import MyTicketList from './myTicketList';
import MyDetailView from './myDetailView';
import TeamProjectList from './teamProjectList';
import TeamTicketList from './teamTicketList';
import TeamDetailView from './teamDetailView';
import NavBar from './navbar';
import Footer from './footer';
import Create from './create';
import Login from './login';
import CreateUsers from './createUsers';
import Account from './account';

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
      userId: null,
      editTicketMode: false,
      search: '',
      searchType: 'ticketTitle'
    };
    this.setProjectId = this.setProjectId.bind(this);
    this.setTicketId = this.setTicketId.bind(this);
    this.setView = this.setView.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.edit = this.edit.bind(this);
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {

  }

  searchOrFilter(value, type) {
    const newState = {};
    newState.search = value;
    newState.searchType = type;

    this.setState(newState);
  }

  setUserId(id) {
    this.setState({ userId: id });
  }

  setView(newView, backPage = null) {
    this.setState({ view: newView, backPage: backPage, search: '', searchType: 'ticketTitle' });
  }

  setProjectId(id) {
    this.setState({ projectId: id });
  }

  setTicketId(id) {
    this.setState({ ticketId: id });
  }

  edit(editMode) {
    this.setState({ editTicketMode: editMode });

  }

  render() {
    if (this.state.view === 'logIn') {
      return (
        <div>
          <Login setView={this.setView} setId={this.setUserId}/>
        </div>
      );
    } else if (this.state.view === 'createUser') {
      return (
        <div>
          <CreateUsers setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'myProjectList') {
      return (
        <div>
          <NavBar view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <MyProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.state.userId}/>
          <Footer view={this.state.view} setView={this.setView}/>

        </div>
      );
    } else if (this.state.view === 'myTicketList') {
      return (
        <div>
          <NavBar backpage='myProjectList' view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <MyTicketList
            search={this.state.search} searchType={this.state.searchType} setView={this.setView} projectId={this.state.projectId} setTicketId={this.setTicketId} userId={this.state.userId}
          />
          <Footer view={this.state.view} setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'myDetailView') {
      return (
        <div>
          <NavBar edit={this.edit} view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <MyDetailView setView={this.setView} edit={this.state.editTicketMode} ticketId={this.state.ticketId}/>
        </div>
      );
    } else if (this.state.view === 'teamProjectList') {
      return (
        <div>
          <NavBar view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <TeamProjectList setView={this.setView} setProjectId={this.setProjectId} userId={this.state.userId}/>
          <Footer view={this.state.view} setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamTicketList') {
      return (
        <div>
          <NavBar backpage='teamProjectList' view={this.state.view} setView={this.setView} onChange={this.searchOrFilter}/>
          <TeamTicketList search={this.state.search} searchType={this.state.searchType} setView={this.setView} userId={this.state.userId} projectId={this.state.projectId} setTicketId={this.setTicketId}/>
          <Footer view={this.state.view} setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'teamDetailView') {
      return (
        <div>
          <NavBar view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <TeamDetailView setView={this.setView} ticketId={this.state.ticketId}/>
        </div>
      );
    } else if (this.state.view === 'create') {
      return (
        <div>
          <NavBar backpage={this.state.backPage} view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <Create backpage={this.state.backPage} setView={this.setView} userId={this.state.userId}/>
        </div>
      );
    } else if (this.state.view === 'account') {
      return (
        <div>
          <NavBar view={this.state.view} setView={this.setView} onChange={this.searchOrFilter} />
          <Account setView={this.setView} ticketId={this.state.ticketId} userId={this.state.userId}/>
          <Footer view={this.state.view} setView={this.setView} />
        </div>
      );
    }
  }
}
