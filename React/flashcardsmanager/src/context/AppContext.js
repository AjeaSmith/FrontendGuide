import React, { createContext, useState } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [cards, setCards] = useState([]);
  const [username, setUsername] = useState("");

  const addCard = ({ question, answer }) => {
    setCards([
      { question, answer, id: cards.length + 1, posted: Date.now() },
      ...cards,
    ]);
  };
  const removeCard = (id) => {
    setCards(cards.filter((item) => item.id !== id));
  };
  const setName = (name) => {
    setUsername(name);
  };
  return (
    <AppContext.Provider
      value={{ cards, username, addCard, removeCard, setName }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
