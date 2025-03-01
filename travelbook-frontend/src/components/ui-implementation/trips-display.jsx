import React from 'react'
import Card from '../ui/card'
import axios from 'axios'

export default class TripsDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.getTripsUser = this.getTripsUser.bind(this);
  }

  // À revoir, peut-être une autre façon de faire
  componentDidMount() {
    this.getTripsUser();
  }

  getTripsUser(){
    const url = 'http://localhost:3333/api/trip/show';
    const headers = {'Authorization': 'Bearer ' + this.props.user.token};
    axios.get(url, {headers})
      .then((response) => {
        this.props.onHandleUserTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const userTrips = this.props.userTrips;
    return(
      <>
        {userTrips.map((trip) => (
          <Card
            key={trip.id}
            user={this.props.user}
            trip={trip}/>
        ))}

      </>
    )
  }
}