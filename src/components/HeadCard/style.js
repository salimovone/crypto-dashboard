import { styled } from "styled-components";

export const Main = styled.div`
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 15px;
    list-style: none;
    padding: 10px;
    margin: 0 10px 10px 0;
    .headIconBox{
        background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),${({color})=>color};
        width: 70px;
        height: 70px;
        border-radius: 20px;
        padding: 10px;
        margin: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        box-shadow: 0 4px 9px rgba(35,76,227,.3), inset 0 0 15px rgba(255,255,255,.35);
    }
    .headColorText{
        color: ${({color})=>color} ;
    }
`