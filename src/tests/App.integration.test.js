import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('full app rendering/navigating', () => {
  render(<App />);
  // Check that the Scoreboard is rendered
  expect(screen.getByText('Player X')).toBeInTheDocument();
  expect(screen.getByText('Player O')).toBeInTheDocument();
  // Check that the GameBoard is rendered
  const cells = screen.getAllByRole('button', { name: /cell/i });
  expect(cells.length).toBe(9);
  // Check that the GameControls are rendered
  expect(screen.getByText('Previous Step')).toBeInTheDocument();
  expect(screen.getByText('Reset Board')).toBeInTheDocument();
});

test('allows user to play a game', () => {
  render(<App />);
  // Player X clicks on the first cell
  const cells = screen.getAllByRole('button', { name: /cell/i });
  fireEvent.click(cells[0]);
  expect(cells[0]).toHaveTextContent('X');
  // Player O clicks on the second cell
  fireEvent.click(cells[1]);
  expect(cells[1]).toHaveTextContent('O');
});

test('resets the game when reset button is clicked', () => {
  render(<App />);
  // Player X clicks on the first cell
  const cells = screen.getAllByRole('button', { name: /cell/i });
  fireEvent.click(cells[0]);
  // Reset the game
  fireEvent.click(screen.getByText('Reset Board'));
  expect(cells[0]).toHaveTextContent('');
});

test('undoes the last move when previous step button is clicked', () => {
  render(<App />);
  // Player X clicks on the first cell
  const cells = screen.getAllByRole('button', { name: /cell/i });
  fireEvent.click(cells[0]);
  // Undo the last move
  fireEvent.click(screen.getByText('Previous Step'));
  expect(cells[0]).toHaveTextContent('');
});

test('declares a winner when a player has three in a row', () => {
  render(<App />);
  const cells = screen.getAllByRole('button', { name: /cell/i });
  // Player X makes a winning combination
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[3]); // O
  fireEvent.click(cells[1]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[2]); // X
  // Check for winner announcement
  expect(screen.getByText('Player X Wins!')).toBeInTheDocument();
});
