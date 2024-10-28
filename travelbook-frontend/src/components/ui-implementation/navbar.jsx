import React from "react";
import FloatingDock  from "../ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconMap,
  IconLogout,
  IconNewSection
} from "@tabler/icons-react";

export default class Navbar extends React.Component{

  links = [
    {
      title: "Home",
      value: "home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My Trips",
      value: "myTrips",
      icon: (
        <IconMap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Personalize Trips",
      value: "personalizeTrips",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My Account",
      value: "myAccount",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Logout",
      value: "logout",
      icon: (
        <IconLogout className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  render(){
    return (
      <div className="fixed flex items-end justify-center h-[35rem] w-full">
        <FloatingDock
          items={this.links}
          currentLayout={this.props.currentLayout}
          onHandleUserLogin={this.props.onHandleUserLogin}/>
      </div>
    )
  }
}