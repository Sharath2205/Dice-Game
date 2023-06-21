import React, { useState } from "react";
import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button } from "./styled/button";
import Rules from "./Rules";

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [randomDice, setRandomDice] = useState(1);
  const [errorMsg, setErrorMsg] = useState(" ");
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (selectedNumber === undefined) {
      setErrorMsg(
        "Select a Number and try again. Read the rules if you want to know how to play."
      );
      return;
    }
    let randomNumber = Math.ceil(Math.random() * 6);
    setRandomDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + 3);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  return (
    <Container>
      <div className="header">
        <TotalScore score={score} />
        <NumberSelector
          setErrorMsg={setErrorMsg}
          errorMsg={errorMsg}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RollDice rollDice={rollDice} randomDice={randomDice} />
      <div className="buttons">
        <Button onClick={() => setScore(0)}>Reset score</Button>
        <Button
          onClick={() => {
            setShowRules((prev) => !prev);
          }}
        >
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        {showRules && <Rules />}
      </div>
    </Container>
  );
};

export default PlayGame;

const Container = styled.div`
  /* align-items: center; */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 140px;
  }

  .buttons {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;
