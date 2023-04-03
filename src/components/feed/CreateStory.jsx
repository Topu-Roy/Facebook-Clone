import React from "react";
import ProfileImg from "../../assets/profile.jpg";

const CreateStory = () => {
  return (
    <div className="relative h-[12.5rem] max-w-[7rem] overflow-hidden rounded-[0.6rem] bg-gray-600 shadow shadow-gray-300">
      <div className="">
        <img src={ProfileImg} alt="" className="opacity-80" />
      </div>
      <div className="absolute bottom-0 left-0 h-[3.2rem] w-full bg-white">
        <svg
          fill="white"
          className="mx-auto -translate-y-[50%] rounded-full border-[4px] border-white bg-blue-600 p-1"
          viewBox="0 0 20 20"
          width="2.5em"
          height="2.5em"
        >
          <g fillRule="evenodd" transform="translate(-446 -350)">
            <g fillRule="nonzero">
              <path
                d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                transform="translate(354.5 159.5)"
              ></path>
              <path
                d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                transform="translate(354.5 159.5)"
              ></path>
            </g>
          </g>
        </svg>
        <span className="mx-auto block -translate-y-[80%] text-center text-sm font-semibold">
          Create Story
        </span>
      </div>
    </div>
  );
};

export default CreateStory;
