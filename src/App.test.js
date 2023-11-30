import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the game board', () => {
  render(<App />);
  const gameBoard = screen.getByRole('grid');
  expect(gameBoard).toBeInTheDocument();
});
