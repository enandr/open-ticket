import React from 'react';

export default class TeamDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    /*     fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isTesting: false })); */
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.setView('teamTicketList')}>
          Back
        </button>
        <h1>TEAM DETAIL VIEW</h1>

      </div>
    );
  }
}
