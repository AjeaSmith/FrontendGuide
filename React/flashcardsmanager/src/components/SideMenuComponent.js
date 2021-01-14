import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
const SideMenu = () => {
  const { addCard, username, cards } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendData = () => {
    const data = {
      question,
      answer,
    };
    addCard(data);
    setShow(false);
    setQuestion("");
    setAnswer("");
  };
  console.log(cards);
  return (
    <>
      <nav>
        <div className="nav_username">
          <div className="username">
            <p>{username.charAt(0).toUpperCase()}</p>
          </div>
          <h4>{username}</h4>
        </div>
        <ul className="nav_menu">
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a onClick={handleShow}>
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              name="question"
              id="question"
              placeholder="What's your question?"
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid rgb(222, 221, 221)",
                borderRadius: "2px",
              }}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <br />
            <br />
            <textarea
              name=""
              id=""
              cols="53"
              rows="5"
              max="200"
              style={{
                padding: "0.5em",
                border: "1px solid rgb(222, 221, 221)",
                borderRadius: "2px",
              }}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Write your answer"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={sendData} style={{ backgroundColor: "#127b8e" }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    </>
  );
};

export default SideMenu;
