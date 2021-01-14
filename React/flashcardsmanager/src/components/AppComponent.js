import React, { useContext } from "react";
import CardsComponent from "./CardsComponent";
import "../css/Main.css";
import { AppContext } from "../context/AppContext";
const AppComponent = () => {
  const { cards } = useContext(AppContext);
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
        {!cards.length ? <h2>No cards to show...</h2> : <CardsComponent />}
      </div>
    </section>
  );
};

export default AppComponent;
