import React from 'react';

function GameCell({ value, onClick, index }) {
  const label = value ? `Cell ${value}` : `Empty cell ${index + 1}`;
  return (
    <button className='game-cell' aria-label={label} onClick={onClick}>
      {value}
    </button>
  );
}

export default GameCell;
