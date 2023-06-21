import { styled } from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  setErrorMsg,
  errorMsg,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <OptionsContainer>
      <p className="error_msg">{errorMsg}</p>
      <div className="numbers">
        {numbers.map((number, i) => (
          <Box
            selected={number === selectedNumber}
            key={i}
            onClick={() => {
              setErrorMsg(" ");
              setSelectedNumber(number);
            }}
          >
            <p>{number}</p>
          </Box>
        ))}
      </div>
      <p>Please select a Number</p>
    </OptionsContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 72px;
  height: 72px;

  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: ${(props) =>
    !props.selected
      ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      : "rgba(101, 101, 101, 0.24) 0px 3px 8px"};
  transition: 300ms all ease-in-out;

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 40px;

  .error_msg {
    position: absolute;
    top: 28px;
    right: 140px;
    color: red;
    font-size: 14px;
    font-weight: 500;
    transition: 200ms all ease-in-out;
  }

  p {
    margin-top: 10px;
    font-weight: 700;
    font-size: 24px;
  }

  .numbers {
    display: flex;
    gap: 24px;
  }
`;
