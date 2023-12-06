import React from 'react';

function GameControls({ onReset, onUndo }) {
  return (
    <div className='game-controls'>
      <button onClick={onUndo}>Previous Step</button>
      <button onClick={onReset}>Reset Board</button>
    </div>
  );
}

export default GameControls;