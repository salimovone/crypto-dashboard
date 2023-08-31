import { styled } from "styled-components";

export const Main = styled.div`
  height: max-content;
  border: 0;
  background: linear-gradient(
      51.64deg,
      rgba(255, 255, 255, 0) 34.2%,
      rgba(255, 255, 255, 0.2) 97.35%,
      rgba(255, 255, 255, 0) 160.66%
    ),
    rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .msgR {
    max-width: 270px;
    margin-bottom: 30px;
    margin-top: 10px;
    div {
      color: #35446f;
      font-size: 14px;
      font-weight: 400;
      background: #e3e9ff;
      border-radius: 0 15px 15px 15px;
      padding: 10px;
      margin-bottom: 5px;
      width: 100%;
    }
    div.media {
      border-radius: 15px !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
    }
  }
  .msgS {
    max-width: 270px;
    margin-top: 10px;
    margin-bottom: 30px;
    align-self: flex-end;
    text-align: end;
    div {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      background: #6586bf;
      border-radius: 0 15px 15px 15px;
      padding: 10px;
      margin-bottom: 5px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 52px;
  padding-left: 32px;
  background: linear-gradient(
      51.64deg,
      rgba(255, 255, 255, 0) 34.2%,
      rgba(255, 255, 255, 0.2) 97.35%,
      rgba(255, 255, 255, 0) 160.66%
    ),
    rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .play{
    background: #234ce3;
    border-radius: 8px;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
