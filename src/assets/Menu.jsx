import React from "react";
import { useSelector } from "react-redux";
import { validActiveNavs } from "../redux-toolkit/navLinkSlice";

const Menu = (props) => {
  const currentNavState = useSelector((state) => state.navActive.value);

  if (currentNavState === validActiveNavs.HOME) {
    return (
      <svg
        className={props.className}
        viewBox="0 0 28 28"
        fill="#666666"
        height="28"
        width="28"
      >
        <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
      </svg>
    );
  } else {
    return (
      <svg
        className={props.className}
        viewBox="0 0 28 28"
        fill="#666666"
        height="28"
        width="28"
      >
        <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
      </svg>
    );
  }
};

export default Menu;
