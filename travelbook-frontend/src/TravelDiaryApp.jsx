import React from 'react';
import HomeFrom from './HomeForm';

export default class TravelDiaryApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleSignupLoginChange = this.handleSignupLoginChange.bind(this);
    this.state = {
      signup: true
    };
  }

  handleSignupLoginChange(){
    this.setState({signup : !this.state.signup});
  }

  render(){
    const signup = this.state.signup;
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
        onSignupLoginChange={this.handleSignupLoginChange}/>
      </>
  )
  }
}