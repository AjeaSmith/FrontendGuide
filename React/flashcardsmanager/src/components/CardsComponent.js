import React from "react";

const CardsComponent = () => {
  return (
    <section>
      I have all the cards
      {/* Loop through cards from localstorage that gets added */}
      {/* card fliip back */}
      <div className="card">
        <div className="card_conent">
          <h2>What is the color of the sky?</h2>
          <div className="card_actions">
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_conent">
          <h2>What is the color of the sky?</h2>
          <div className="card_actions">
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsComponent;
