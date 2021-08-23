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
}

var emojisWeKnow = Object.keys(emojiDatabase);

export default function App() {
  const[meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDatabase[userInput];
    if(meaning === undefined){
      meaning = "we dont have this in our database";
    }
    function emojiClickHandler(emoji){
      var meaning = emojiDatabase[emoji];
      set meaning(meaning);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Vegan Emoji Docs</h1>
      <h2>Search any Vegetable or Fruit Emoji and know about it.</h2>
      <input onChange={emojiInputHandler}></input>
      <div> {meaning} </div>
      <div> emojis we know </div>
      {
        emojisWeKnow.map(function(emoji)){
          return(
            <span onClick={() => emojiClickHandler(emoji) }
            style = {{fontSize:"2rem", padding:"0.5rem", cursor:"pointer"}}
            key = {emoji}
          )
        }
        {emoji}
        </span>
      }
      <ul>
        {/* {shoppingList.map(function (item) {
          return <li>{item}</li>;
        })} */}
      </ul>
    </div>
  );
}
