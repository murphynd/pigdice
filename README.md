# _Pig Dice 🎲_

#### _A game of dice, Aug 26, 2020_

#### By _**Natalie Murphy - Brycen Bartolome - Alma Frankenstein**_

## Description

Pig Dice 🎲
Write a program where two users can play Pig dice against each other. D

- Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn.

- If the player rolls any other number, it is added to their turn total and the player's turn continues.

- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

- The first player to score 100 or more points wins.

Further Exploration
Add options to play one of the other variations of Pig Dice using two or more dice
Add option to play the computer - easy or hard levels:
Easy: Computer always stops after second roll.
Hard: Computer uses strategy based on current total and rolled dice.

## Specs

![drawing of plan](</imgs/aww-board(1).png>)

| test | desire                                             | input                                                                                  | output                                                                        |
| ---- | -------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1    | players enter names                                | two names                                                                              | two names printed and form hides                                              |
| 2    | players have empty scores under names              | names                                                                                  | names with empty scores                                                       |
| 3    | players roll to decide who goes first.             | input: player clicks roll other player clicks roll who ever is closer to 1 is player 1 | output: player 1 & 2 are chosen                                               |
| 4    | player one rolls and score is added to roll amount | input: player one hits roll button                                                     | output: rollAmount adds up                                                    |
| 5    | player one rolls a one and ammount is zero         | input: make outcome of roll 1                                                          | output: 0                                                                     |
| 6    | player one rollAmmount is added to score           | input: turn is over                                                                    | output: score reflects outcome of rollAmmount                                 |
| 7    | switch players                                     | input: turn is over due to rolling a 1 or player hitting hold                          | output: player 2 begins.                                                      |
| 8    | win!                                               | input score of a player reaches >100                                                   | output: games stops and player with the score over 100 wins-- option to reset |

## Setup/Installation Requirements

clone repository and open index.html to play.

## Known Bugs

## Support and contact details

## Technologies Used

javaScript / jQuery

### License

MIT

Copyright (c) 2020 **_Natalie Murphy - Brycen Bartolome - Alma Frankenstein_**
