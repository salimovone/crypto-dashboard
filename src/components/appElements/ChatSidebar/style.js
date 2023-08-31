import { styled } from "styled-components";

export const Sidebar = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 8px;
  background: linear-gradient(
      51.64deg,
      rgba(255, 255, 255, 0) 34.2%,
      rgba(255, 255, 255, 0.2) 97.35%,
      rgba(255, 255, 255, 0) 160.66%
    ),
    rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255, 255, 255, 0.35);
`;

export const Avatar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  button {
    width: 40px;
    height: 40px;
    background: linear-gradient(
        51.64deg,
        rgba(255, 255, 255, 0) 34.2%,
        rgba(255, 255, 255, 0.2) 97.35%,
        rgba(255, 255, 255, 0) 160.66%
      ),
      rgba(255, 255, 255, 0.2);
    border: 2px solid #fff;
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
  }
`;

export const InpBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
  justify-content: space-between;
  .input {
    display: flex;
    gap: 10px;
    background: linear-gradient(
        51.64deg,
        rgba(255, 255, 255, 0) 34.2%,
        rgba(255, 255, 255, 0.2) 97.35%,
        rgba(255, 255, 255, 0) 160.66%
      ),
      rgba(255, 255, 255, 0.2);
    border: 2px solid #fff;
    border-radius: 8px;
    /* width: 100%; */
    padding: 5px 10px;
    input {
      background-color: transparent;
      outline: none;
    }
  }
  button {
    background: #234ce3;
    border-radius: 8px;
    width: 40px !important;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

export const Users = styled.ul`
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
