import React from "react";
import { styled } from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer className="score">
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  display: grid;
  place-items: center;
  width: 220px;
  h1 {
    font-weight: 500;
    font-size: 100px;
    height: 112px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    margin-top: 10px;
  }
`;
