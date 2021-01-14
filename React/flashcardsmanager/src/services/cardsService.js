// add card to DB (localstorage)
export const addCard = ({ question, answer }) => {
  const existingData = JSON.parse(localStorage.getItem("cards"));
  const newData = {
    question,
    answer,
    posted: Date.now(),
  };
  existingData.unshift(newData);
  localStorage.setItem("cards", JSON.stringify(existingData));
};
// get all cards from DB (localstorage)
export const getCards = () => {
  const data = JSON.parse(localStorage.getItem("cards"));
  return data;
};
