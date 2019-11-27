import React from 'react';

export default class MyDetailView extends React.Component {
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
      <div>
        <h1>DETAIL VIEW</h1>
        <button onClick={() => this.props.setView('myTicketList')}>Go Back to My Ticket List</button>
      </div>
    );
  }
}
