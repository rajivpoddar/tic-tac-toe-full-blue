# Tic-Tac-Toe Game

This project is a fully functional Tic-Tac-Toe game built entirely by tddGPT using the Test-Driven Development (TDD) approach. The game allows users to play as either Player X or Player O, interact with a 3x3 grid, and keep track of scores.

## Features
- Play as Player X or Player O.
- Scoreboard to keep track of the score between players.
- 3x3 grid to play Tic-Tac-Toe.
- Place symbols on the grid by clicking on an empty square.
- Prevents placing symbols in occupied squares.
- Visual cues for occupied squares.
- Tracks turns and automatically switches between players after each turn.
- 'Previous Step' button to undo the last move.
- 'Reset Board' button to clear the grid and start a new game.
- Automatically determines and announces the winner.
- Responsive design for desktop and mobile devices.

Built with ReactJS, the game showcases unidirectional data flow, functional components, and state management with hooks. The UI is styled to match the provided mockup, ensuring a user-friendly experience.

## Development Process
The development followed the TDD methodology, starting with writing failing tests and then implementing the code to pass those tests. The process included unit and integration testing to ensure each component and the entire application functioned as expected.

## Running the Game
To run the game, navigate to the project directory and use the following command:

```
cd /Users/rajiv/Downloads/projects/tic-tac-toe && npm start
```

Enjoy the game!