import React, { useEffect, useState } from "react";
import { getCards } from "../services/cardsService";
const CardsComponent = ({ data }) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    // const data = getCards();
    setCards(data);
  }, []);
  return (
    <section>
      {!cards ? (
        <p>No cards to show...</p>
      ) : (
        cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="card_content">
                <h3>{card.question}</h3>
                <p>{card.answer}</p>
                <div className="card_actions">
                  <span>{card.posted}</span>
                  <div className="card_actions_icons">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      {/* I have all the cards */}
      {/* Loop through cards from localstorage that gets added */}
      {/* card fliip back */}
      {/* <div className="card">
        <div className="card_content">
          <h3>What is the color of the sun?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nobis corporis distinctio sed praesentium nihil, aliquam ipsa,
            libero nulla
          </p>
          <div className="card_actions">
            <span>1/09/2021</span>
            <div className="card_actions_icons">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card_content">
          <h3>What is the color of the sky?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis dicta sunt? Ullam, ipsum nesciunt?
          </p>
          <div className="card_actions">
            <span>1/09/2021</span>
            <div className="card_actions_icons">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      </div>
     */}
    </section>
  );
};

export default CardsComponent;
