import React from "react";
import "./side-menu.styles.scss";
import SideMenuItem from "./side-menu-item.component";
import SideMenuTop from "./side-menu-top.component";

const SideMenu = () => {
  return (
    <div className="side-menu-con">
      <SideMenuTop />
      <SideMenuItem/>
      
    </div>
  );
};

export default SideMenu;
