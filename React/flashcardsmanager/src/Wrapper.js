import React from "react";
import AppComponent from "./components/AppComponent";
import SideMenu from "./components/SideMenuComponent";

const Wrapper = ({ history }) => {
  return (
    <>
      <input type="checkbox" id="checkbox" style={{ display: "none" }} />
      <header>
        <h2>
          Flash Cards{" "}
          <span>
            <i className="fas fa-bolt"></i>
          </span>
          <label htmlFor="checkbox" style={{ cursor: "pointer" }}>
            <i
              className="fas fa-bars"
              id="navBtn"
              style={{
                color: "white",
                fontSize: "18px",
                marginLeft: "1.9em",
              }}></i>
          </label>
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
