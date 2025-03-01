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
    this.state = {
      signup: true,
      user: {
        email: '',
        firstName: '',
        lastName: '',
        token: ''
      },
      currentLayout: '',
      userTrips: []
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

  render(){
    const signup = this.state.signup;
    const currentLayout = this.state.currentLayout;
    const user = this.state.user;
    const userTrips = this.state.userTrips;
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
        onHandleUserLogin={this.handleUserLogin}
        onHandleLayoutChanging={this.handleLayoutChanging}
        onHandleUserTrips={this.handleUserTrips}/>
      </>
    )


  }
}