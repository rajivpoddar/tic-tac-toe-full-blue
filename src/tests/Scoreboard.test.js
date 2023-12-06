import { render, screen } from '@testing-library/react';
import Scoreboard from '../components/Scoreboard';

test('renders the scoreboard with initial scores', () => {
  const scores = { xScore: 0, oScore: 0 };
  render(<Scoreboard scores={scores} />);
  const playerXScore = screen.getByText('Player X').nextSibling;
  const playerOScore = screen.getByText('Player O').nextSibling;

  expect(playerXScore).toHaveTextContent('0');
  expect(playerOScore).toHaveTextContent('0');
});

test('renders the scoreboard with updated scores', () => {
  const scores = { xScore: 1, oScore: 3 };
  render(<Scoreboard scores={scores} />);
  const playerXScore = screen.getByText('Player X').nextSibling;
  const playerOScore = screen.getByText('Player O').nextSibling;

  expect(playerXScore).toHaveTextContent('1');
  expect(playerOScore).toHaveTextContent('3');
});
