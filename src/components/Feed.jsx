import React from "react";
import FeedPost from "./feed/FeedPost";
import PostSection from "./feed/PostSection";
import StorySection from "./feed/StorySection";

const Feed = () => {
  return (
    <section className="w-[35.5%]">
      <StorySection />
      <PostSection />
      <FeedPost />
    </section>
  );
};

export default Feed;
