import React from "react";

import "./App.scss";

import Header from "./components/header/header.component";
import SideMenu from "./components/side-menu/side-menu.component";
import MainCon from "./components/main-content/main-content.component";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="side-menu-plus-con">
        <SideMenu />
        <MainCon />
      </div>
    </div>
  );
}

export default App;
