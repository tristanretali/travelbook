import React from 'react';
import HomeFrom from './HomeForm';

export default class TravelDiaryApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleSignupLoginChange = this.handleSignupLoginChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.state = {
      signup: true,
      user: {
        email: '',
        firstName: '',
        lastName: '',
        token: ''
      }
    };
  }

  handleSignupLoginChange(){
    this.setState({signup : !this.state.signup});
  }

  handleUserLogin(user){
    this.setState({user : user})
  }

  render(){
    const signup = this.state.signup;
    console.log(this.state.user)
    return (
      <>
        <div className="min-w-96">
          <h1 className="text-4xl font-bold pl-52">
            Welcome<br />
            to your<br />
            travel diary
          </h1>
        </div>
        <HomeFrom
        signup={signup}
        onSignupLoginChange={this.handleSignupLoginChange}
        onHandleUserLogin={this.handleUserLogin}/>
      </>
  )
  }
}