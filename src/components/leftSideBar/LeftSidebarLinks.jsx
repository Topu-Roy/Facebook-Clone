import React from "react";

const LeftSidebarLinks = (props) => {
  return (
    <a
      href="#"
      className="flex w-[21.5rem] items-center justify-start rounded-md py-[0.66rem] hover:bg-gray-200"
    >
      <img src={props.img} alt="" className="ml-[0.5rem] mr-1 w-9" />
      <span className="px-2 text-[0.91rem] font-medium">{props.linkName}</span>
    </a>
  );
};

export default LeftSidebarLinks;
