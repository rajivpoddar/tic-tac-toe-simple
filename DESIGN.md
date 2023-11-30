# Architectural Design for Tic-Tac-Toe Game

## Component Structure
- App: The main component that renders the game board, score board, and control buttons.
- GameBoard: A component that displays the 3x3 grid and handles the game logic.
- GridCell: A component for each cell in the game board.
- ScoreBoard: A component to display the scores of both players.
- ControlButtons: A component to render the 'Previous Step' and 'Reset Board' buttons.

## State Management
- The App component will maintain the state of the game, including the current board state, player turns, scores, and game status (win, tie, or in-progress).
- State will be managed using React's useState hook to ensure unidirectional data flow and re-rendering of components when state changes.

## Data Flow
- The App component will pass down the necessary state and callbacks as props to the child components.
- Child components will communicate back to the App component via callbacks passed as props.

## Testing Approach
- We will use React Testing Library for unit and integration tests.
- Tests will be written before the implementation of components (following TDD).
- The src/tests/ directory will contain all component tests except for the main App tests, which will be in the src/ directory.