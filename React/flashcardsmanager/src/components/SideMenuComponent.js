import React from "react";

const SideMenu = ({ username }) => {
  return (
    <nav>
      <div className="nav_username">
        <div className="username">
          <p>{username.charAt(0).toUpperCase()}</p>
        </div>
        <h4>{username}</h4>
      </div>
      <ul className="nav_menu">
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-plus"></i>
            <span>Add New Card</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-power-off"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
      <div className="nav_logo">
        <i className="fas fa-bolt"></i>
      </div>
    </nav>
  );
};

export default SideMenu;
