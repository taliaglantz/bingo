import React, { useState } from "react";
import "./App.css";

function App() {
  const prompts = [
    "Identical hand twin",
    "Loves marmite",
    "Doesn’t like or drink coffee",
    "Dog person",
    "Has an unusual family tradition",
    "Knows sign language",
    "Plays an instrument",
    "Same birth month as you",
    "Named their car",
    "Interesting hobby",
    "Knows another alphabet",
    "Takes a class",
    "Left handed",
    "Life accomplishment in the past year",
    "Has been scuba diving",
    "Comes from a big family",
    "Started a business",
    "Keen cook or baker",
    "Listens to podcasts",
    "Recently met a celebrity",
    "Read more than 10 books this year",
    "Has a tattoo",
    "Has lived in more than one country",
    "Has a favourite sports team",
    "Has a secret talent"
  ];

  const [clickedSquares, setClickedSquares] = useState(Array(25).fill(false));

  const toggleSquare = (index) => {
    const newClickedSquares = [...clickedSquares];
    newClickedSquares[index] = !newClickedSquares[index];
    setClickedSquares(newClickedSquares);
  };

  return (
      <>
        <h1>Tech and Product Team BINGO!</h1>
        <div className="wrapper">
          <div className="bingo-grid">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className={`bingo-square ${clickedSquares[index] ? "active" : ""}`}
                onClick={() => toggleSquare(index)}
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </>
  );
}

export default App;

