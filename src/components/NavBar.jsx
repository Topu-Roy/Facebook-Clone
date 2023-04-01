import React from "react";
import { useDispatch } from "react-redux";
import {
  changeActiveState,
  validActiveNavs,
} from "../redux-toolkit/navLinkSlice";

import Logo from "../assets/facebook.png";
import Group from "../assets/Group.jsx";
import HomeIcon from "../assets/HomeIcon.jsx";
import Menu from "../assets/Menu.jsx";
import MessengerIcon from "../assets/MessengerIcon";
import NotificationIcon from "../assets/NotificationIcon.jsx";
import OtherMenu from "../assets/OtherMenu.jsx";
import Friends from "../assets/Friends.jsx";
import Plus from "../assets/Plus.jsx";
import Search from "../assets/Search.jsx";
import Shop from "../assets/Shop.jsx";
import Watch from "../assets/Watch.jsx";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow">
      <div className="flex flex-1 items-center justify-start gap-2">
        {/* ------------------------- Logo --------------------------------*/}
        <img src={Logo} alt="" className="h-10" />

        {/* ------------------------- Search Input & Button --------------------------*/}
        <button className="flex h-10 w-[11.8rem] items-center justify-start gap-2 rounded-full bg-slate-100 xl:h-auto xl:w-auto xl:py-2 xl:px-3">
          <span className="hidden bg-slate-100 xl:block">Search Facebook</span>
          <span className="flex items-center justify-center">
            <Search />
          </span>
        </button>
        <button className={"md:hidden"}>
          <Menu />
        </button>

        {/* ------------------------- Nav Links ------------------------- */}
      </div>
      <div className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-[4.9rem] xl:gap-[5.73rem] 2xl:gap-[6.85rem]">
        <button
          onClick={() => dispatch(changeActiveState(validActiveNavs.HOME))}
        >
          <HomeIcon />
        </button>
        <button
          onClick={() => dispatch(changeActiveState(validActiveNavs.FRIENDS))}
        >
          <Friends />
        </button>
        <button
          onClick={() => dispatch(changeActiveState(validActiveNavs.WATCH))}
        >
          <Watch />
        </button>
        <button
          onClick={() => dispatch(changeActiveState(validActiveNavs.SHOP))}
        >
          <Shop />
        </button>
        <button
          className={"xl:hidden"}
          onClick={() => dispatch(changeActiveState(validActiveNavs.MENU))}
        >
          <Menu />
        </button>
        <button
          className={"hidden xl:block"}
          onClick={() => dispatch(changeActiveState(validActiveNavs.GROUPS))}
        >
          <Group />
        </button>
      </div>

      {/* ------------------------- Menu & Profile ------------------------- */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 xl:flex">
          <OtherMenu />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 xl:hidden">
          <Plus />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <MessengerIcon />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <NotificationIcon />
        </button>
        <div className="h-10 w-10 rounded-full bg-indigo-200"></div>
      </div>
    </nav>
  );
};

export default NavBar;
