
import React, { useState } from 'react';

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState('');
  const winningCombinations = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
  ];

  const handleClick = (index) => {
    if (boxes[index] === '' && winner === '') {
      const newBoxes = [...boxes];
      newBoxes[index] = turnO ? 'O' : 'X';
      setBoxes(newBoxes);
      checkWinner(newBoxes);
      setTurnO(!turnO);
    }
  };

  const checkWinner = (currentBoxes) => {
    for (let pattern of winningCombinations) {
      const [a, b, c] = pattern;
      if (currentBoxes[a] && currentBoxes[a] === currentBoxes[b] && currentBoxes[a] === currentBoxes[c]) {
        setWinner(currentBoxes[a]);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(''));
    setTurnO(true);
    setWinner('');
  };

  return (
    <div className="game-container">
      <div className={`msg-container ${winner ? '' : 'hide'}`}>
        <p id="msg">Congratulations, the winner is {winner}</p>
      </div>
      <h1>Tic Tac Toe</h1>
      <div className='game1'>
      <div className="game">
        {boxes.map((box, index) => (
          <button
            key={index}
            className="box"
            onClick={() => handleClick(index)}
            disabled={box !== '' || winner !== ''}
          >
            {box}
          </button>
        ))}
      </div>
      </div>
      <button id="new-btn" onClick={resetGame}>New Game</button>
    </div>
  );
};

export default TicTacToe;
