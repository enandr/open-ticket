import React from 'react';
import MyTicket from './myTicket';
import AlertIcon from './AlertIcon';
export default class MyTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTickets: [],
      loaded: 'false',
      search: '',
      searchType: 'ticketTitle'
    };
    this.searchOrFilter = this.searchOrFilter.bind(this);
  }

  componentDidMount() {

    this.getMyTickets();
  }

  getMyTickets() {

    const request = `/api/tickets?projectId=${this.props.projectId}&userId=${this.props.userId}`;

    fetch(request)
      .then(res => res.json())

      .then(data => {
        const reverseData = data.reverse();
        this.setState({ myTickets: reverseData, loaded: 'true' });
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  searchOrFilter(event) {
    const newState = {};
    newState.search = event.target.value;
    newState.searchType = event.target.name;

    this.setState(newState);

  }

  render() {
    const ticketArray = this.state.myTickets.map((value, index) => {
      if (value[this.props.searchType].toLowerCase().includes(this.props.search.toLowerCase())) {
        if (value[this.state.searchType].toLowerCase().includes(this.state.search.toLowerCase())) {
          return (<MyTicket key={index} value={value} setView={this.props.setView} setTicketId={this.props.setTicketId}/>);
        }
      }
    });

    if (!this.state.myTickets[0] && this.state.loaded === 'true') {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center centerHeight">
          <div className="text-center">
            <AlertIcon className="" />
            <h3>No Tickets Available</h3>
            <h5>Please create one.</h5>
          </div>
        </div>
      );
    } else {

      return (
        <div>
          <input className="form-control" name="ticketTitle" type="text" placeholder="Search" aria-label="Search" onChange={this.searchOrFilter}></input>
          <table className="table table-bordered clickable table-hover">
            <tbody>{ticketArray}</tbody>
          </table>
        </div>
      );
    }
  }
}
