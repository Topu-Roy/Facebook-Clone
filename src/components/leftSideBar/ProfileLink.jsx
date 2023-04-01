import React from "react";
import { useSelector } from "react-redux";

const ProfileLink = (props) => {
  const name = useSelector((state) => state.profileName.value);

  return (
    <a
      href="#"
      className="flex w-[21.5rem] items-center justify-start rounded-md py-[0.66rem] hover:bg-gray-200"
    >
      <img
        src={props.img}
        alt=""
        className="ml-[0.5rem] mr-1 h-9 w-9 rounded-full"
      />
      <span className="px-2 text-[0.91rem] font-medium">{name}</span>
    </a>
  );
};

export default ProfileLink;
