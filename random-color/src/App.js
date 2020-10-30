import React, { useState } from 'react';
import './App.css';
import Color from "./Components/Color";

function App() {

  const [randomColor, setRandomColor] = useState("fff")

  function handleClick() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    setRandomColor(color)
  }
  // var randomColor = Math.floor(Math.random()*16777215).toString(16);

  return (
    <main style={{backgroundColor: `#${randomColor}`}}>
      <Color color={randomColor} handleClick={handleClick} />
    </main>
  );
}

export default App;
