import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const GetUsername = ({ history }) => {
  const { username, setName } = useContext(AppContext);
  const checkUsername = (e) => {
    e.preventDefault();
    if (username === "") return;
    history.push({
      pathname: "/home",
      state: username,
    });
    setName("");
  };

  return (
    <section className="username_wrapper">
      <div className="username_content">
        <form onSubmit={checkUsername}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetUsername;
