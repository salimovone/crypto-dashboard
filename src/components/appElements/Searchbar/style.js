import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  background: linear-gradient(
      51.64deg,
      rgba(255, 255, 255, 0) 34.2%,
      rgba(255, 255, 255, 0.2) 97.35%,
      rgba(255, 255, 255, 0) 160.66%
    ),
    rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  button {
    background: rgba(51, 52, 72, 0.05);
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input#checkbox {
    outline: none;
    background-color: #234ce3;
  }
  .inp-box{
    background: rgba(51,52,72,.05);
    border-radius: 12px;
    border: 0;
    input{
        background-color: transparent;
        outline: none;
    }
  }
`;
