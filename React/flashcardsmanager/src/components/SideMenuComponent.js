import React from "react";

const SideMenu = ({ username }) => {
  return (
    <nav>
      <section className="nav_content">
        <ul className="nav_menu">
          <li>profile</li>
          <li>Icon Home</li>
          <li>Icon Add New Card</li>
        </ul>
        <div className="nav_logo">A Logo Goes Here</div>
      </section>
    </nav>
  );
};

export default SideMenu;
