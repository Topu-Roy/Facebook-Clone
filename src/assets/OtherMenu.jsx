import React from "react";

const OtherMenu = (props) => {
  return (
    <svg
      fill="#666666"
      className={props.className}
      viewBox="0 0 44 44"
      width="1.2em"
      height="1.2em"
    >
      <circle cx="7" cy="7" r="6"></circle>
      <circle cx="22" cy="7" r="6"></circle>
      <circle cx="37" cy="7" r="6"></circle>
      <circle cx="7" cy="22" r="6"></circle>
      <circle cx="22" cy="22" r="6"></circle>
      <circle cx="37" cy="22" r="6"></circle>
      <circle cx="7" cy="37" r="6"></circle>
      <circle cx="22" cy="37" r="6"></circle>
      <circle cx="37" cy="37" r="6"></circle>
    </svg>
  );
};

export default OtherMenu;
