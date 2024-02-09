# Schmemory Game

## Technologies Used

- **HTML**: Structures the game's layout and content.
- **CSS**: Styles the game's appearance.
- **JavaScript**: Powers the game's logic, card flipping, and match checking.

## How to Play

- **Finding Matches**: Click on two cards to flip them over. If the cards match, they will remain face up. Otherwise, they will flip back over.
- **Winning the Game**: Match all card pairs to win the game. The timer stops when all matches are found, displaying your total time.

## Installation Setup
1. Install all dependencies
```Shell
npm install
```
2. Install Nodemon
```Shell
npm install -g nodemon
```
3. Run the application
```Shell
nodemon server.js
```

## Future Improvements
1. Adding Levels: Adding buttons like Beginner, Intermediate, Advanced.
- For Beginners the game board will be 3x3 grid.
- For Intermediate the game board will be 4x4 grid.
- For Advanced the game board will be 5x5 grid.
2. Start button: After selecting the difficulty level, next we will have a start button. The game will start by clicking the "Start Button".
3. Timer: We can add timer to this game, the timer will stop after we find all the matches.
