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

export const Windows = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Link = styled.div`
  width: 100%;
  color: rgba(51, 52, 72, 0.5);
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background: ${({active})=>active&&"rgba(51, 52, 72, 0.05)"};
  margin-bottom: 5px;
  justify-content: space-between;
  span {
    font-size: 14px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    font-weight: 600;
    width: 40px;
    align-items: center;
    color: ${({active})=>active&&"#fff"};
    background: ${({active})=>active&&"#0dbf0a"};
  }
  &:hover {
    background: rgba(51, 52, 72, 0.05);
    color: #333448;
    span {
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 20px;
  span{
    margin-bottom: 0;
    color: #333448;
    font-size: 16px;
    font-weight: 600;
  }
  button{
    width: 30px;
    height: 30px;
    background: rgba(46,55,164,.05);
    border-radius: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    color: #234ce3;
  }
`