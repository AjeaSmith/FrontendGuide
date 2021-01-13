import React from "react";

const CardsComponent = () => {
  return (
    <section>
      {/* I have all the cards */}
      {/* Loop through cards from localstorage that gets added */}
      {/* card fliip back */}
      <div className="card">
        <div className="card_content">
          <h2>What is the color of the sky?</h2>
          <p>
            haisphphhsiphpihaPHDpiahidhaiHDa hiaHDIahidhaiHDhadaD
            HiahdihaIDHaihdihaIDHIahdh Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta minima cum
          </p>
          <div className="card_actions">
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_content">
          <h2>What is the color of the sky?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis dicta sunt? Ullam, ipsum nesciunt?
          </p>
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
