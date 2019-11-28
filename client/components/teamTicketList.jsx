import React from 'react';
import TeamTicket from './teamTicket';

export default class TeamTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TeamTicket setView={this.props.setView} />
        </div>
      </div>
    );
  }
}
