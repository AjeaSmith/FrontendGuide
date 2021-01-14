import React from "react";
import CardsComponent from "./CardsComponent";
import "../css/Main.css";
const AppComponent = ({ data }) => {
  return (
    <section className="App">
      <div className="search_wrapper">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for your cards..."
        />
      </div>
      <div className="cards_wrapper">
        {/* <h2>No cards to show...</h2> */}
        <CardsComponent data={data} />
      </div>
    </section>
  );
};

export default AppComponent;
