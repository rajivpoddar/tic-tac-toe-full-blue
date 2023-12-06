# Design Document for Tic-Tac-Toe Game

## Architecture
- The application will be built using ReactJS.
- The game logic will be encapsulated within functional components.

## Component Structure
- App: The main component that renders the scoreboard, game board, and game controls.
- Scoreboard: A component to display the scores of Player X and Player O.
- GameBoard: A grid component to represent the 3x3 game board.
- GameCell: A component for each cell in the game board.
- GameControls: A component for the 'Previous Step' and 'Reset Board' buttons.

## State Management
- The App component will maintain the state of the game, including the current player, the board state, and the scores.
- State will be managed using React's useState hook to ensure unidirectional data flow.
- The GameBoard will receive the board state and the function to handle cell clicks as props.
- The Scoreboard will receive the scores as props.

## Data Flow
- Data will flow from the App component down to child components via props.
- Callback functions will be passed to child components to handle events like cell clicks.

## Styling
- CSS will be used to style the components according to the provided UI mockup.
- Responsive design will be achieved using media queries and flexible layouts.
