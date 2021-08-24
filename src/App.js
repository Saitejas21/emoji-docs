import React, { useState } from "react";
import "./styles.css";

var emojiDatabase = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🫒": "Olive",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🫑": "Bell Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut"
}; //add more emojis here to update database.

var emojisWeKnow = Object.keys(emojiDatabase);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDatabase[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to Vegan Emoji Docs</h1>
      <h2>Search any Vegetable or Fruit Emoji and know about it.</h2>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
