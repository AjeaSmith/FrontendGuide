// Get Comments
export const getVideoCommentsById = (videoId) => {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      let commentData = [];
      data.items.map((comment) =>
        commentData.push(comment.snippet.topLevelComment.snippet)
      );
      return commentData;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
