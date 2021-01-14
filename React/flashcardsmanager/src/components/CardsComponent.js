import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const CardsComponent = () => {
  const { cards } = useContext(AppContext);
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
                <span>{card.posted}</span>
                <div className="card_actions_icons">
                  <i className="fas fa-edit"></i>
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
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
