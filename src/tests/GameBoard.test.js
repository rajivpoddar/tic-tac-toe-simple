import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

test('renders a 3x3 game grid with empty cells', () => {
  const { getAllByRole } = render(<GameBoard />);
  const cells = getAllByRole('button');
  expect(cells.length).toBe(9);
  cells.forEach(cell => {
    expect(cell).toHaveTextContent('');
  });
});

test('allows players to take turns clicking on cells to place X and O', () => {
  const { getAllByRole } = render(<GameBoard />);
  const cells = getAllByRole('button');
  fireEvent.click(cells[0]);
  expect(cells[0]).toHaveTextContent('X');
  fireEvent.click(cells[1]);
  expect(cells[1]).toHaveTextContent('O');
  fireEvent.click(cells[2]);
  expect(cells[2]).toHaveTextContent('X');
});

test('detects a win for a player', () => {
  const { getAllByRole, getByText } = render(<GameBoard />);
  const cells = getAllByRole('button');
  // Simulate a win for Player X
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[3]); // O
  fireEvent.click(cells[1]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[2]); // X
  expect(getByText('Player X Wins!')).toBeInTheDocument();
});

test('detects a tie game', () => {
  const { getAllByRole, getByText } = render(<GameBoard />);
  const cells = getAllByRole('button');
  // Simulate a tie game
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[1]); // O
  fireEvent.click(cells[2]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[3]); // X
  fireEvent.click(cells[5]); // O
  fireEvent.click(cells[7]); // X
  fireEvent.click(cells[6]); // O
  fireEvent.click(cells[8]); // X
  expect(getByText('Game is a tie!')).toBeInTheDocument();
});
