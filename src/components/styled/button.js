import { styled } from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  color: white;
  background: #000000;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.3s all ease-in;
  font-weight: 500;

  &:hover {
    border: 1px solid black;
    color: black;
    background-color: #fff;
    transition: 0.3s all ease-in;
  }
`;
