import React from "react";
import Stories from "./CreateStory";
import Story from "./Story";
import StoryTabs from "./StoryTabs";
import Profile from "../../assets/profile-img.jpg";
import Story1 from "../../assets/story-img.jpg";

const StorySection = () => {
  return (
    <div className="mt-3 rounded-md bg-white shadow">
      <StoryTabs />
      <div className="flex gap-2 py-4 pl-4">
        <Stories />
        <Story profile={Profile} storyImage={Story1} />
        <Story profile={Profile} storyImage={Story1} />
        <Story profile={Profile} storyImage={Story1} />
        <Story profile={Profile} storyImage={Story1} />
      </div>
    </div>
  );
};

export default StorySection;
