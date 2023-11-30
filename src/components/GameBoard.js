import React, { useState } from 'react';

const GameBoard = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkForWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = index => {
    if (grid[index] || checkForWinner(grid)) return;
    const newGrid = [...grid];
    newGrid[index] = isXNext ? 'X' : 'O';
    setGrid(newGrid);
    setIsXNext(!isXNext);
  };

  const winner = checkForWinner(grid);
  let status;
  if (winner) {
    status = 'Player ' + winner + ' Wins!';
  } else if (grid.every(cell => cell != null)) {
    status = 'Game is a tie!';
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <div className='game-grid'>
      {grid.map((value, index) => (
        <button key={index} className='grid-cell' role='button' onClick={() => handleClick(index)}>
          {value}
        </button>
      ))}
      <div>{status}</div>
    </div>
  );
};

export default GameBoard;
