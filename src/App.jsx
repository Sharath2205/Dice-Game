import { useState } from "react";
import StartPage from "./components/StartPage";
import PlayGame from "./components/PlayGame";
import "./App.css";

import { styled } from "styled-components";

function App() {
  const [startGame, isStartGame] = useState();
  return (
    <>
      <div className="play">
        {startGame ? <PlayGame /> : <StartPage isStartGame={isStartGame} />}
      </div>
      <ErrMsg className="err">Please try on larger screen</ErrMsg>
    </>
  );
}

export default App;

const ErrMsg = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Raleway", sans-serif;
  background-color: black;
  color: white;
  place-items: center;
  font-weight: lighter;
  font-size: 4em;
  text-align: center;
  padding: 50px;
`;
