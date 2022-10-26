import React, { useEffect, useState } from 'react';
import Header from './components/Header/index.js';
import Square from './components/Square/index.js';
import Score from './components/Score/index.js';
import './App.css';

function App() {

  const [randomIndex,setRandomIndex] = useState(Math.floor(Math.random() * 3));
  const [colors, setColors] = useState([getRandomColor(), getRandomColor(), getRandomColor()]);
  const [raffledColor, setRaffledColor] = useState(colors[randomIndex]);
  const [clickedColor, setClickedColor] = useState();
  const [points, setPoints] = useState(0);

  function getRandomColor() {
    let r, g, b, rgb;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
  }

  function reset() {
    setClickedColor();
    setColors([getRandomColor(), getRandomColor(), getRandomColor()]);
    setRandomIndex(Math.floor(Math.random() * 3));
  }

  function score() {
    setPoints(points + 1);
  }

  useEffect(() => {
    if(clickedColor === raffledColor) {
      score();
      setTimeout(() => reset(), 2000);
    }
    return setRaffledColor(colors[randomIndex]);
  }, [clickedColor, raffledColor, colors, randomIndex]);

  return (
    <>
      <section>
        <Header raffled={raffledColor} clicked={clickedColor} onClick={() => reset()}/>

        <main>
          <div className='container'>
            {colors.map((color, index) => {
              return <Square key={index}
                             style={{background: color}}
                             onClick={() => setClickedColor(color)}/>
            })}
          </div>

          <Score score={points}/>
        </main>
      </section>
    </>
  );
}

export default App;
