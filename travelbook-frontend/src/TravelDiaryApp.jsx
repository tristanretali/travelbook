import React from 'react';
import HomeForm from './HomeForm';
import Navbar from './components/ui-implementation/navbar'
import ConnectedLayout from './ConnectedLayout'

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
      },
      currentLayout: ''
    };
  }

  handleSignupLoginChange(){
    this.setState({signup : !this.state.signup});
  }

  handleUserLogin(user){
    this.setState({user : user})
    this.setState({currentLayout: 'home'})
  }

  render(){
    const signup = this.state.signup;
    const currentLayout = this.state.currentLayout
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
            onHandleUserLogin={this.handleUserLogin}/>
        </>
      )
    }
    return (
      <>
        <ConnectedLayout
        currentLayout={currentLayout}/>
      </>
    )


  }
}