"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import axios from 'axios'

export default class SignupForm extends  React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
    /*TODO Crete file in utils for API request duplication*/
    const url = 'http://localhost:3333/api/signup'
    axios.post(url, {
      email: e.target.email.value,
      password: e.target.password.value,
      firstname: e.target.firstname.value,
      lastname:  e.target.lastname.value
    })
      .then((response) => {
        this.props.onHandleUserLogin(
          {
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            token: response.data.value
          })
      })
      .catch((error) => {
        console.log(error);
      })
  };

  goToLogin(){
    this.props.onSignupLoginChange();
  }

  render(){
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Sign up
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Sign up to create create your account
        </p>

        <form className="my-8" onSubmit={this.handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
          </button>
        </form>
        <p className="text-neutral-800 ">Already have an account? <a href="#" onClick={this.goToLogin} className="underline underline-offset-2">Login</a></p>
      </div>
    );
  }

}

const LabelInputContainer = ({
                               children,
                               className,
                             }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};