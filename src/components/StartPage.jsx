import styled from "styled-components";
import { Button } from "./styled/button";

const StartPage = ({ isStartGame }) => {
  return (
    <Container>
      <div className="Logo">
        <img src="src/assets/images/Logo.png" alt="Logo Png" />
      </div>
      <div className="details">
        <h1>DICE GAME</h1>
        <Button onClick={() => isStartGame((prev) => !prev)}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  /* max-width: 1180px; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 129px 180px;
  background-color: #ffffff;

  .details {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  h1 {
    width: 528px;
    height: 144px;
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 144px;
  }
`;
