import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const CardsComponent = () => {
  const { cards, removeCard } = useContext(AppContext);
  const dateFormat = (date) => {
    return new Date(date).toDateString();
  };
  return (
    <section>
      {/* I have all the cards */}
      {/* Loop through cards from localstorage that gets added */}
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div className="card_content">
              <h3>{card.question}</h3>
              <p>{card.answer}</p>
              <div className="card_actions">
                <span>{dateFormat(card.posted)}</span>
                <div className="card_actions_icons">
                  <i className="fas fa-edit"></i>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => removeCard(card.id)}></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardsComponent;
