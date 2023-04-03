import React from "react";

const Story = (props) => {
  return (
    <div className="relative flex h-[12.5rem] w-[7rem] items-center justify-center overflow-hidden rounded-[0.6rem] bg-gray-400 shadow shadow-gray-300">
      <div className="absolute left-[10%] top-[5%] z-50 h-10 w-10 overflow-hidden rounded-full border-[4px] border-blue-500">
        {/* ----------------------------------------------------Profile Image---------------------------------------------------- */}
        <img src={props.profile} alt="" />
      </div>
      <span className="absolute bottom-[10%] left-0 right-0 z-50 mx-auto block text-center font-medium text-white drop-shadow-2xl ">
        Topu Roy
      </span>
      <img src={props.storyImage} alt="" className="z-10 brightness-75" />
    </div>
  );
};

export default Story;
