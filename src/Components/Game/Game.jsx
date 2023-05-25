import React, { useState } from "react";

const Game = () => {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playRound = (choice) => {
    const computer = getComputerChoice();
    const roundResult = playerRound(choice, computer);
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(roundResult);
  };

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playerRound = (playerSelection, computer) => {
    let result;
    let computerScore = 0;
    let playerScore = 0;
    const player = playerSelection.toLowerCase();

    if (player === computer) {
      result = "Draw Match";
      computerScore = computerScore;
      playerScore = playerScore;
    } else if (player === "rock" && computer === "paper") {
      result = "You Lose ... 'Paper beats Rock'";
      computerScore += 1;
    } else if (player === "rock" && computer === "scissor") {
      result = "You Win!!! Rock breaks the scissor";
      playerScore += 1;
    } else if (player === "paper" && computer === "rock") {
      result = "Hurray you win!! Paper covers the rock";
      playerScore += 1;
    } else if (player === "paper" && computer === "scissor") {
      result = "Oh no you lose.. Scissor cuts the paper";
      computerScore += 1;
    } else if (player === "scissor" && computer === "rock") {
      result = "You lose .. Rock breaks the scissor";
      computerScore += 1;
    } else if (player === "scissor" && computer === "paper") {
      result = "You win!! Scissor cuts the paper";
      playerScore += 1;
    } else {
      result = "You entered the wrong choice";
    }
    return result;
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors Game</h1>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => playRound(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Player's Choice: {playerChoice}</p>
          <p>Computer's Choice: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
