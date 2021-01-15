import React, { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const localData = localStorage.getItem("cards"),
    localUsername = localStorage.getItem("username");
  const [cards, setCards] = useState(!localData ? [] : JSON.parse(localData));
  const [username, setUsername] = useState(
    localUsername ? localUsername : "John Doe"
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("username", username);
  }, [cards, username]);
  const addCard = ({ question, answer }) => {
    setCards([
      {
        question,
        answer,
        id: cards.length + 1,
        posted: Date.now(),
      },
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
