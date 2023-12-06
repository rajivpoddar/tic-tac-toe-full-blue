import { render, screen } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

test('renders the game board with 9 empty cells', () => {
  const board = Array(9).fill(null);
  render(<GameBoard board={board} />);
  const cells = screen.getAllByRole('button');
  expect(cells.length).toBe(9);
  cells.forEach(cell => {
    expect(cell).toHaveTextContent('');
  });
});

test('renders the game board with some cells filled', () => {
  const board = ['X', null, 'O', null, 'X', null, 'O', null, 'X'];
  render(<GameBoard board={board} />);
  const cells = screen.getAllByRole('button');
  expect(cells[0]).toHaveTextContent('X');
  expect(cells[2]).toHaveTextContent('O');
  expect(cells[4]).toHaveTextContent('X');
  expect(cells[6]).toHaveTextContent('O');
  expect(cells[8]).toHaveTextContent('X');
});