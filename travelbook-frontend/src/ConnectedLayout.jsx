import React from 'react'
import Navbar from './components/ui-implementation/navbar'
import TripsDisplay from './components/ui-implementation/trips-display'
import TripCreationForm from './components/ui-implementation/trip-creation-form'

export default class ConnectedLayout extends React.Component{

  render(){
    if (this.props.currentLayout === "home"){
      return (
        <>
          <h1 className="text-4xl font-bold">What is your next trip ?</h1>
          <Navbar
          currentLayout={this.props.currentLayout}
          onHandleUserLogin={this.props.onHandleUserLogin}
          onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>
        </>
      )
    } else if (this.props.currentLayout === "myTrips"){
      return (
        <>
          <TripsDisplay
          user={this.props.user}
          currentTripPage={this.props.currentTripPage}
          tripsPerPage={this.props.tripsPerPage}
          userTrips={this.props.userTrips}
          showTripDetails={this.props.showTripDetails}
          onHandleUserTrips={this.props.onHandleUserTrips}
          onHandleTripPageChanging={this.props.onHandleTripPageChanging}
          onHandleShowTripDetailsChanging={this.props.onHandleShowTripDetailsChanging}/>
          <Navbar
            currentLayout={this.props.currentLayout}
            onHandleUserLogin={this.props.onHandleUserLogin}
            onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>
        </>
      )

    }else if (this.props.currentLayout === "personalizeTrips"){
      return (
        <>
          <TripCreationForm
            user={this.props.user}
            onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>
          <Navbar
            currentLayout={this.props.currentLayout}
            onHandleUserLogin={this.props.onHandleUserLogin}
            onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>
        </>
      )
    }else if (this.props.currentLayout === "myAccount"){
      return (
        <>
          <h1>My Account</h1>
          <Navbar
            currentLayout={this.props.currentLayout}
            onHandleUserLogin={this.props.onHandleUserLogin}
            onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>
        </>
      )
    }
  }
}