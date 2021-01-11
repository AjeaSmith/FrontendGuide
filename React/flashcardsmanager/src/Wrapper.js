import React from "react";
import AppComponent from "./components/AppComponent";
import SideMenu from "./components/SideMenuComponent";

const Wrapper = ({ history }) => {
  return (
    <>
      <header>
        <h2>
          Flash Cards{" "}
          <span>
            <i class="fas fa-bolt"></i>
          </span>
        </h2>
      </header>
      <main className="AppWrapper">
        <SideMenu username={history.location.state} />
        <AppComponent />
      </main>
    </>
  );
};

export default Wrapper;
