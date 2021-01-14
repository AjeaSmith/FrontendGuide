import React from "react";
import AppComponent from "./components/AppComponent";
import SideMenu from "./components/SideMenuComponent";
import "./css/App.css";
const Wrapper = () => {
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
        <SideMenu />
        <AppComponent />
      </main>
    </>
  );
};

export default Wrapper;
