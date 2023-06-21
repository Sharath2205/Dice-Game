import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <p>&bull; Select any number</p>
      <p>&bull; Click on dice image</p>
      <p>
        &bull; For every correct guess 3 points will be added and for every
        wrong guess 1 point will be deducted
      </p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  margin-top: 10px;
  background: #fbf1f1;
  padding: 0 20px 20px 20px;

  h1 {
    padding: 20px;
    font-weight: 700;
    font-size: 24px;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    padding: 4px 20px;
  }
`;
