import React from 'react';

function Scoreboard({ scores }) {
  return (
    <div className='scoreboard'>
      <div className='score-card'>
        <h3>Player X</h3>
        <p>{scores.xScore}</p>
      </div>
      <div className='score-card'>
        <h3>Player O</h3>
        <p>{scores.oScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;