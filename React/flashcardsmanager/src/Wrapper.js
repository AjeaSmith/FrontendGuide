import React from "react";
import AppComponent from "./components/AppComponent";
import SideMenu from "./components/SideMenuComponent";

const Wrapper = ({ history }) => {
  return (
    <main className="AppWrapper">
      <SideMenu username={history.location.state} />
      <AppComponent />
    </main>
  );
};

export default Wrapper;
