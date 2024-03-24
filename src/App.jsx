import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState('inherit');

  const changeColorToRed = () => {
    setColor('red');
    setFontSize('50px');
  };

  const changeColorToBlue = () => {
    setColor('blue');
    setFontSize('70px');
  };
  

  return (
    <>
      <div>
        <h1 style={{ color, fontSize }}>Hello world</h1>
        <button onClick={changeColorToRed}>Change Color to Red</button>
        <button onClick={changeColorToBlue}>Change Color to Blue</button>
        <h1 style={{ color: 'red',backgroundColor: "lightblue"}}>This is jay</h1>
      </div>
    </>
  );
}

export default App;
