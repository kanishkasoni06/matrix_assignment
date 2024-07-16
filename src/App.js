import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick = (index) => {
    if (colors[index] === 'white') {
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);
      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      if (newClickOrder.length === 9) {
        changeColorsToOrange(newClickOrder);
      }
    }
  };

  const changeColorsToOrange = (order) => {
    let delay = 0;
    order.forEach((index, i) => {
      setTimeout(() => {
        const newColors = [...colors];
        newColors[index] = 'orange';
        setColors(newColors);
      }, delay);
      delay += 500; // Delay of 0.5 second for each box
    });
  };

  return (
    <div className="container">
    <h1>Color Matrix</h1>
    <div className="grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  </div>
);
};

export default App;

