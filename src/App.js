import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Docs</h1>
      <h2>Search your emoji and know about it.</h2>
      <button onClick={likeClickHandler}>Like me !!</button> {likeCounter}
    </div>
  );
}
