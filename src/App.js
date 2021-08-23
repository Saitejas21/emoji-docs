import React, { useState } from "react";
import "./styles.css";

var shoppingList = ["milk", "eggs", "bread", "flowers"];

export default function App() {
  var [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Docs</h1>
      <h2>Search your emoji and know about it.</h2>
      <input onChange={inputChangeHandler}></input>
      <div> Welcome {userInput} </div>
      <ul>
        {shoppingList.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
