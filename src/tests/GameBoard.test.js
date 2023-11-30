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
