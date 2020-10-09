# ga04-Raindrops

General Assembly SEI-39 Project 4 - "Raindrops" - a speed typing game

## Introduction

Raindrops is a game in which the player is given a set of letters, ranging from two to four characters long. The player is then given a period of time to type in as many words as they can think of that begin with the specified string of letters. Striking the ["Enter"] key inputs the current string of typed letters to the game. The game uses a raindrop motif to present letters to the player, which blends seamlessly into the background. The game environment immerses the player with relaxing ambient sounds, including a rainy backdrop and instrumental music (used with permission) from the artist "C418".

&nbsp;

## Gameplay

When the player clicks the "New Game" button, they are presented with a prompt, which is a string of letters two to four characters long. After reviewing the prompt, the player may click "Start Game" to begin, or "Leave Game" to return to the welcome screen. When the game begins, the player is given 30 seconds to type as many words as they can that begin with the specified string. The player should type as rapidly as possible to achieve the highest possible score.

## Scoring

This is a simple game project, so scoring relies on the player. At the end of the "active" period, the player is presented with all of the words they submitted as part of that round. The player may hit a "submit" button, and the game awards an amount of points for that round based on the total length of the words submitted. The player also has the option to hit "Leave Game", which will not record their final score.

## Extra Features

- The game records all submitted scores, allowing the player to see them under the "Your Scores" button.
- An ingame guide to gameplay can be found by clicking on the "How to Play" button.

## Rainmaker

Raindrops features a standalone script of my own devising, which pulls from a provided list of youtube videos and plays only the audio from a random one in the background, at a low volume. By default, the list of videos includes long-running ambient rain and thunder soundscapes. This script runs automatically, and can be manually started and stopped by clicking the "Start Audio" and "Stop Audio" buttons, respectively.
