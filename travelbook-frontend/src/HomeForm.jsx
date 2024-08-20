import React from 'react'
import SignupForm from './components/ui-implementation/signup-form'
import LoginForm from './components/ui-implementation/login-form'
export default class HomeFrom extends React.Component{

  render(){
    return(
      <>
        {
          this.props.signup === true ? <SignupForm
            signup={this.props.signup}
            onSignupLoginChange={this.props.onSignupLoginChange}/>
            :
            <LoginForm
              signup={this.props.signup}
              onSignupLoginChange={this.props.onSignupLoginChange}/>
        }

      </>
    )
  }
}