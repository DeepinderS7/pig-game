
# Pig Game 🎲
---

### Description

The **Pig Game** is a simple and fun dice game built using **HTML**, **CSS**, and **JavaScript**. The goal of the game is to be the first player to reach **100 points**. Players take turns rolling a die, accumulating points during their turn, but if they roll a `1`, they lose all their points for that turn and it becomes the other player's turn. Players can also choose to **Hold**, adding their current turn's points to their total score and passing the turn to the next player.

### Gameplay Rules

1. On a player's turn, they can roll the die as many times as they want. The result of each roll is added to their **current turn score**.
2. A player can choose to **Hold** at any time. When they hold, their current turn score is added to their **total score**, and the turn passes to the other player.
3. If a player rolls a `1`, they lose all points for that turn and the turn automatically switches to the other player.
4. The first player to reach **100 points** wins the game!

### Features

- **Interactive Dice Rolls**: Players can roll the die and see the results in real time.
- **Current Turn Score Tracking**: The score for the current turn is updated with each roll, unless a `1` is rolled.
- **Hold Feature**: Players can choose to hold their current score and pass the turn.
- **Winning Condition**: The game ends when a player reaches 100 points, and a winner is declared.
- **Responsive Design**: Styled using CSS for a clean, user-friendly interface.

### Technologies Used

- **HTML**: Structure of the game interface.
- **CSS**: Styling and layout of the game.
- **JavaScript**: Core game logic and interactivity.

### How to Play

1. **Roll the Dice**: Click the **"Roll Dice"** button to roll the die.
2. **Hold**: If you're satisfied with your current score, click **"Hold"** to save your points and pass the turn to the other player.
3. **Winning**: The first player to reach **100 points** wins the game. Once a player wins, the game can be reset.

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pig-game.git
   ```
2. Open the `index.html` file in your browser.

No server is needed! The game is fully functional with just HTML, CSS, and JavaScript.

### How the Game Works (JavaScript Logic)

- **Rolling the Dice**: The dice roll is simulated by generating a random number between 1 and 6. This is done using the `Math.random()` function in JavaScript.
- **Turn Management**: After each roll, the player's turn score is updated. If a `1` is rolled, the turn is automatically passed to the other player.
- **Holding**: When a player holds, their current score is added to their total score, and the turn passes to the next player.
- **Winning Condition**: The game checks if a player's total score has reached 100 points after each hold. If so, the game ends and displays the winner.
