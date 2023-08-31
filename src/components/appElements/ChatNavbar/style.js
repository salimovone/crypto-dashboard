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
  align-items: center;
  .buttons {
    display: flex;
    button {
      padding: 10px 0;
      width: 40px;
      height: 40px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      justify-content: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      margin: 0 10px;
      background: linear-gradient(
          51.64deg,
          rgba(255, 255, 255, 0) 34.2%,
          rgba(255, 255, 255, 0.2) 97.35%,
          rgba(255, 255, 255, 0) 160.66%
        ),
        rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255, 255, 255, 0.35);
      border-radius: 8px;
    }
  }
`;
