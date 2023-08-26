import { styled } from "styled-components";

export const Button = styled.button`
  transition: 0.2s all;
  background-color: ${(props) =>
    props.background ? props.background : "blue"};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  /* opacity: 1; */
  padding: 6px 20px 6px 20px;
  border-radius: 8px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-transform: capitalize;
  &&:hover {
    background-color: ${(props) => props.backgroundHover};
    color: ${(props) => props.colorHover};
  }
`;
