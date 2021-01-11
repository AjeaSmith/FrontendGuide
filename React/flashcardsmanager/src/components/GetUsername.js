import React, { useState } from "react";
const GetUsername = ({ history }) => {
  const [username, setusername] = useState("");
  const checkUsername = (e) => {
    e.preventDefault();
    if (username === "") return;
    history.push({
      pathname: "/home",
      state: username,
    });
    setusername("");
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
            onChange={(e) => setusername(e.target.value)}
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
