import React from 'react';
import HomeForm from './HomeForm';
import ConnectedLayout from './ConnectedLayout';

export default class TravelDiaryApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleSignupLoginChange = this.handleSignupLoginChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleLayoutChanging = this.handleLayoutChanging.bind(this);
    this.handleUserTrips = this.handleUserTrips.bind(this);
    this.handleTripPageChanging = this.handleTripPageChanging.bind(this);
    this.handleShowTripDetailsChanging = this.handleShowTripDetailsChanging.bind(this);
    this.state = {
      signup: true,
      user: {
        email: '',
        firstName: '',
        lastName: '',
        token: ''
      },
      currentLayout: '',
      currentTripPage: 0,
      tripsPerPage: 3,
      userTrips: [],
      showTripDetails: false,
    };
  }

  handleSignupLoginChange(){
    this.setState({signup : !this.state.signup});
  }

  handleUserLogin(user){
    this.setState({user : user})
  }

  handleLayoutChanging(newLayout){
    this.setState({currentLayout: newLayout})
  }

  handleUserTrips(userTrips){
    this.setState({userTrips: userTrips})
  }

  handleTripPageChanging(newTripPage){
    this.setState({currentTripPage: newTripPage})
  }

  handleShowTripDetailsChanging(){
    this.setState({showTripDetails: !this.state.showTripDetails})
  }

  render(){
    const signup = this.state.signup;
    const currentLayout = this.state.currentLayout;
    const user = this.state.user;
    const userTrips = this.state.userTrips;
    const currentTripPage = this.state.currentTripPage;
    const tripsPerPage = this.state.tripsPerPage;
    const showTripDetails = this.state.showTripDetails;
    if (this.state.user.token === ''){
      return (
        <>
          <div className="min-w-96">
            <h1 className="text-4xl font-bold pl-52">
              Welcome<br />
              to your<br />
              travel diary
            </h1>
          </div>
          <HomeForm
            signup={signup}
            onSignupLoginChange={this.handleSignupLoginChange}
            onHandleUserLogin={this.handleUserLogin}
            onHandleLayoutChanging={this.handleLayoutChanging}/>
        </>
      )
    }
    return (
      <>
        <ConnectedLayout
        currentLayout={currentLayout}
        user={user}
        userTrips={userTrips}
        currentTripPage={currentTripPage}
        tripsPerPage={tripsPerPage}
        showTripDetails={showTripDetails}
        onHandleUserLogin={this.handleUserLogin}
        onHandleLayoutChanging={this.handleLayoutChanging}
        onHandleUserTrips={this.handleUserTrips}
        onHandleTripPageChanging={this.handleTripPageChanging}
        onHandleShowTripDetailsChanging={this.handleShowTripDetailsChanging}/>
      </>
    )


  }
}