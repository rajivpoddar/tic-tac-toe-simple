import React from 'react';

const GameBoard = () => {
  const grid = Array(9).fill(null);

  return (
    <div className='game-grid'>
      {grid.map((value, index) => (
        <button key={index} className='grid-cell' role='button'>
          {value}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
