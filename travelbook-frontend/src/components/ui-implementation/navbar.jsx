import React from "react";
import { FloatingDock } from "../ui/floating-dock";
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
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My Trips",
      icon: (
        <IconMap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Personalize Trips",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My Account",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Logout",
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
        />
      </div>
    )
  }
}