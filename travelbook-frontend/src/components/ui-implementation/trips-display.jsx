import React from 'react'
import Card from '../ui/card'
import TripNavigation from '../ui/trip-navigation'
import TripView from '../ui/trip-view'
import axios from 'axios'

export default class TripsDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.getTripsUser = this.getTripsUser.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.tripDetails = this.tripDetails.bind(this);
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

  nextPage(){
    if ((this.props.currentTripPage + 1) * this.props.tripsPerPage < this.props.userTrips.length){
      this.props.onHandleTripPageChanging(this.props.currentTripPage + 1);
    }
  }

  prevPage(){
    if(this.props.currentTripPage > 0){
      this.props.onHandleTripPageChanging(this.props.currentTripPage - 1);
    }
  }

  tripDetails(e){
    const url = `http://localhost:3333/api/trip/entries/${e.currentTarget.getAttribute("data")}`
    const headers = {'Authorization': 'Bearer ' + this.props.user.token};
    axios.get(url, {headers})
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const userTrips = this.props.userTrips;
    const currentPage = this.props.currentTripPage;
    const tripsPerPage = this.props.tripsPerPage;
    const showTripDetails = this.props.showTripDetails;
    const startIndex = currentPage * tripsPerPage;
    const displayTrips = userTrips.slice(startIndex, startIndex + tripsPerPage);
    if (!showTripDetails){
      return(
        <>
          <div className="w-full flex flex-col">
            <div className="flex justify-around">
              {displayTrips.map((trip) => (
                <Card
                  key={trip.id}
                  user={this.props.user}
                  tripDetails={this.tripDetails}
                  trip={trip}/>
              ))}
            </div>
            <div className="flex justify-between mt-5 mb-10 ml-10 mr-10">
              <TripNavigation
                content={"← Previous"}
                action={this.prevPage}/>
              <TripNavigation
                content={"Next → "}
                action={this.nextPage}/>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <TripView/>
      </>
    )
  }
}