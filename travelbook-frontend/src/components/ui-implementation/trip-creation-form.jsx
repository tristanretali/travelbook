"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import axios from 'axios'

export default class TripCreationForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const url = 'http://localhost:3333/api/trip/create';
    const headers = {'Authorization': 'Bearer ' + this.props.user.token};
    const data = {
      tripName: e.target.tripName.value,
      coverImage: "cat.png"
    }

    axios.post(url, data, {headers})
      .then((response) => {
        console.log(response.data)
        this.props.onHandleLayoutChanging("home")
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render(){
    return (
      <div
        className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-10">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Create Trip
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Enter the details of your new trip
        </p>

        <form className="my-8" onSubmit={this.handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Trip Name</Label>
            <Input id="tripName" placeholder="Paris" type="text" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Create Trip &rarr;
          </button>
        </form>
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