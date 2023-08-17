import { styled } from "styled-components";

export const Diagram = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 8px solid ${({ color }) => color};
  border-left-color: lightgray;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    transform: rotate(45deg);
    color: ${({ color }) => color};
  }
`;
