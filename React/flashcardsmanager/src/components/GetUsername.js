import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const GetUsername = ({ history }) => {
  const [name, setname] = useState("");
  const { setName } = useContext(AppContext);
  const checkUsername = (e) => {
    e.preventDefault();
    if (username === "") return;
    history.push("/home");
    setName(name);
    console.log(name);
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
            value={name}
            onChange={(e) => setname(e.target.value)}
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
