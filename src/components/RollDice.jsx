import { styled } from "styled-components";
import Dice1 from "../assets/images/dice_1.png";
import Dice2 from "../assets/images/dice_2.png";
import Dice3 from "../assets/images/dice_3.png";
import Dice4 from "../assets/images/dice_4.png";
import Dice5 from "../assets/images/dice_5.png";
import Dice6 from "../assets/images/dice_6.png";

const RollDice = ({ rollDice, randomDice }) => {
  const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={images[randomDice - 1]} alt={`Dice ${randomDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
