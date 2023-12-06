import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

function App() {
  // State hooks for managing game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [winner, setWinner] = useState(null);

  // Function to handle cell click
  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const win = calculateWinner(newBoard);
    if (win) {
      setWinner(win);
      const newScores = { ...scores };
      if (win === 'X') {
        newScores.xScore += 1;
      } else {
        newScores.oScore += 1;
      }
      setScores(newScores);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Function to reset the game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Function to undo the last move
  const handleUndo = () => {
    const lastMoveIndex = board.lastIndexOf(isXNext ? 'O' : 'X');
    if (lastMoveIndex === -1) return;

    const newBoard = [...board];
    newBoard[lastMoveIndex] = null;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Helper function to calculate the winner
  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className='game-container'>
      <Scoreboard scores={scores} />
      <div>
        {winner && <div className='winner-announcement' role='alert'>{`Player ${winner} Wins!`}</div>}
        <div role='grid' aria-label='Game board'>
          <GameBoard board={board} onCellClick={handleCellClick} />
        </div>
        <GameControls onReset={handleReset} onUndo={handleUndo} />
      </div>
    </div>
  );
}

export default App;
