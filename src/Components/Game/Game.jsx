import React, { useState } from "react";
import "./style.css";
import Rock from "./rock.png";
import Paper from "./paper.png";
import Scissor from "./scissors.png";
import "animate.css";
const Game = () => {
  const choices = ["rock", "paper", "scissor"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  const playRound = (choice) => {
    const computer = getComputerChoice();
    const roundResult = playerRound(choice, computer);
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(roundResult);
    updateScores(roundResult);
  };

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playerRound = (playerSelection, computer) => {
    let result;
    const player = playerSelection.toLowerCase();

    if (player === computer) {
      result = "Draw Match";
    } else if (player === "rock" && computer === "paper") {
      result = "You Lose ... 'Paper beats Rock'";
    } else if (player === "rock" && computer === "scissor") {
      result = "You Win!!! Rock breaks the scissor";
    } else if (player === "paper" && computer === "rock") {
      result = "Hurray you win!! Paper covers the rock";
    } else if (player === "paper" && computer === "scissor") {
      result = "Oh no you lose.. Scissor cuts the paper";
    } else if (player === "scissor" && computer === "rock") {
      result = "You lose .. Rock breaks the scissor";
    } else if (player === "scissor" && computer === "paper") {
      result = "You win!! Scissor cuts the paper";
    } else {
      result = "You entered the wrong choice";
    }
    return result;
  };

  const updateScores = (result) => {
    if (result.includes("Win")) {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (result.includes("Lose")) {
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h1>Welcome to Rock Paper Scissors Game!</h1>
            <p>Please enter your name:</p>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button className="submit" onClick={closePopup}>Submit</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <div>
          <h1>Rock Paper Scissors Game</h1>
          <div>
            <div className="container">
              {playerChoice && computerChoice && (
                <div className="game-container">
                  <div className="player-score">
                    <p>{playerName}'s Score: {playerScore}</p>

                    <div className="player-choice">
                      <p>Player's Choice: {playerChoice}</p>
                      {playerChoice === "rock" ? (
                        <img
                          src={Rock}
                          alt="Rock"
                          style={{ transform: "scaleX(-1)" }}
                        />
                      ) : playerChoice === "paper" ? (
                        <img
                          src={Paper}
                          alt="Paper"
                          style={{ transform: "scaleX(-1)" }}
                        />
                      ) : (
                        <img
                          src={Scissor}
                          alt="Scissor"
                          style={{ transform: "scaleX(-1)" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="computer-score">
                  <p>Computer Score: {computerScore}</p>
                  <div className="computer-choice">
                    <p>Computer's Choice: {computerChoice}</p>
                    {computerChoice === "rock" ? (
                      <img src={Rock} alt="Rock" />
                    ) : computerChoice === "paper" ? (
                      <img src={Paper} alt="Paper" />
                    ) : (
                      <img src={Scissor} alt="Scissor" />
                    )}
                  </div>
                  </div>
                </div>
              )}
              <p className="result">{result}</p>
              
            </div>

            <div>
              <h1 style={{ paddingLeft: "50px" }}>Select your Choice</h1>
              
              <div className="choice">
                {choices.map((choice) => (
                  <button key={choice} onClick={() => playRound(choice)}>
                    {choice === "rock" ? (
                      <img src={Rock} className="Rock" alt="Rock" />
                    ) : choice === "paper" ? (
                      <img src={Paper} className="Paper" alt="Paper" />
                    ) : (
                      <img src={Scissor} className="Scissor" alt="Scissor" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
