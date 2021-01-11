import React from "react";
import CardsComponent from "./CardsComponent";

const AppComponent = () => {
  return (
    <section className="app">
      <div className="search_wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search cards..."
        />
      </div>
      <div className="cards_wrapper">
        {/* <h2>No cards to show...</h2> */}
        <CardsComponent/>
      </div>
    </section>
  );
};

export default AppComponent;
