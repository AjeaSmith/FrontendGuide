import React, { createContext, useState } from "react";
import { getVideoCommentsById } from "../../services/api/YoutubeAPI";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, setstate] = useState({
    searchText: "",
    data: [],
    seeResults: false,
    error: false,
    errorMessage: "",
    videoIdStr: "",
    positiveNumbers: [],
    negativeNumbers: [],
  });
  const onChange = (value) => {
    setstate({ searchText: value });
  };
  const calculateCommentsResult = (comments, videoId) => {
    let boolValues = [];
    let boolFalseValues = [];
    comments
      .map((d) => {
        return d.textDisplay;
      })
      .forEach((str) => {
        const regexPositive = new RegExp(
          /\b(?:great|thanks|enjoyed it|helpful|love|thank you|nice)\b/gi
        );
        const regexNegative = new RegExp(
          /\b(?:not helpful|dislike|thumbs down|did not help|not useful)\b/gi
        );
        const resPositive = regexPositive.test(str);
        const resNegative = regexNegative.test(str);
        boolValues.push(resPositive);
        boolFalseValues.push(resNegative);
      });
    const positiveComments = boolValues.filter((value) => {
      return value;
    });
    const negativeComments = boolFalseValues.filter((value) => {
      return value;
    });

    setstate({
      data: comments,
      positiveNumbers: positiveComments,
      negativeNumbers: negativeComments,
      searchText: "",
      videoIdStr: videoId,
      seeResults: true,
    });
  };
  const getVideoComments = async () => {
    const URLString = state.searchText.split("watch")[1];
    const videoId = URLString ? URLString.split("=")[1] : "";
    if (videoId === "") {
      setstate({ error: true, errorMessage: "Not a valid video URL" });
      return;
    } else {
      const videoComments = await getVideoCommentsById(videoId);
      calculateCommentsResult(videoComments, videoId);
    }
  };
  return (
    <AppContext.Provider value={{ ...state, onChange, getVideoComments }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
