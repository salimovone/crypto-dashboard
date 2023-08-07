import { styled } from "styled-components";

export const Main = styled.div`
    padding: 15px;
    margin-bottom: 30px;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
`

export const H2 = styled.h2`
    color: ${props => props.color};
`

export const TimerButton = styled.div`
    width: 30px;
    height: 30px;
    flex: none;
    background: ${({active})=>active?"#234ce3":"#e3e9ff"};
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
    margin-right: 5px;
    font-size: 12px;
    color: ${({active})=>active&&"white"};
    &:hover{
        background-color: #234ce3;
        color: white;
    }
`

export const DownloadButton = styled.div`
    width: 30px;
    height: 30px;
    flex: none;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
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
    cursor: pointer;
    color: #234ce3;
`