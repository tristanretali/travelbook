import React from 'react'
import Navbar from './components/ui-implementation/navbar'
import TripsDisplay from './components/ui-implementation/trips-display'

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
          <TripsDisplay/>
          <Navbar
            currentLayout={this.props.currentLayout}
            onHandleUserLogin={this.props.onHandleUserLogin}
            onHandleLayoutChanging={this.props.onHandleLayoutChanging}/>

        </>
      )

    }else if (this.props.currentLayout === "personalizeTrips"){

    }else if (this.props.currentLayout === "myAccount"){

    }
  }
}