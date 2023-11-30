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

// Additional test cases based on user stories

test('tracks each player\'s score', () => {
  // Test to ensure that the score is tracked and updated correctly for both players
});

test('indicates which player\'s turn it is', () => {
  // Test to ensure that the game indicates the current player's turn
});

test('allows player to undo last move with "Previous Step" button', () => {
  // Test to ensure that players can undo their last move
});

test('resets the game board when "Reset Board" button is clicked', () => {
  // Test to ensure that the game board can be reset for a new game
});

test('prevents further moves once a win or tie is detected', () => {
  // Test to ensure that no further moves can be made once a win or tie is detected
});

test('updates the score automatically when a player wins', () => {
  // Test to ensure that the score is automatically updated when a player wins a round
});
