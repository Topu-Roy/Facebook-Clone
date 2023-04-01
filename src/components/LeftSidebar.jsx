import React from "react";
import profileImage from "../assets/profileImage.jpg";
import friends from "../assets/LeftMenuIcons/friends.png";
import mostRecent from "../assets/LeftMenuIcons/most-recent.png";
import groups from "../assets/LeftMenuIcons/groups.png";
import marketplace from "../assets/LeftMenuIcons/marketplace.png";
import watch from "../assets/LeftMenuIcons/watch.png";
import memories from "../assets/LeftMenuIcons/memories.png";
import saved from "../assets/LeftMenuIcons/saved.png";

import LeftSidebarLinks from "./leftSideBar/LeftSidebarLinks";
import ProfileLink from "./leftSideBar/ProfileLink";

const LeftSidebar = () => {
  return (
    <aside>
      <ProfileLink img={profileImage} />
      <LeftSidebarLinks img={friends} linkName={"Friends"} />
      <LeftSidebarLinks img={mostRecent} linkName={"Most Recent"} />
      <LeftSidebarLinks img={groups} linkName={"Groups"} />
      <LeftSidebarLinks img={marketplace} linkName={"Marketplace"} />
      <LeftSidebarLinks img={watch} linkName={"Watch"} />
      <LeftSidebarLinks img={memories} linkName={"Memories"} />
      <LeftSidebarLinks img={saved} linkName={"Saved"} />
    </aside>
  );
};

export default LeftSidebar;
