# ga04-Raindrops
General Assembly SEI-39 Project 4 - "Raindrops" - a speed typing game

## Preamble
Raindrops is a game in which the player is given a set of letters, ranging from two to four characters long.  The player is then given a period of time to type in as many words as they can think of that begin with the specified string of letters.  Striking the ["Enter"] key inputs the current string of typed letters to the game.  The game uses a raindrop motif to present letters to the player, which blends seamlessly into the background.  The game environment immerses the player with relaxing ambient sounds, including a rainy backdrop and instrumental music (used with permission) from the artist "C418".


## Scoring
This is a simple game project, so scoring relies on the player.  At the end of the "active" period, the player is presented with all of the string they submitted as part of that round.  The strings are grouped by length, and the player may click on strings to remove them from the submission sheet if they are incorrect.  Once complete, the player hits a "submit" button, and the game awards an amount of points for that round based on three factors:

- Each word has a base score of 1 point per letter.

- Each word's base score is multiplied based on its length.  The multiplier is equal to 1+((N-3)/10), where N is the word's length.  Longer words are worth more per letter than short words.

- The total score for all words in a particular length category (four words, eight words, etc.) is also multiplied.  This multiplier is equal to (N+M)/16, where N is the word length and M is the quantity of words.

- After all operations are completed, the score is rounded to the nearest integer value.