import React from 'react';
import MyProjectList from './myProjectList';
import MyTicketList from './myTicketList';
import MyDetailView from './myDetailView';

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
          <MyProjectList setView={this.setView}/>
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
    }
  }
}
