import { styled } from "styled-components";

export const Ul = styled.ul`
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    padding: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-flex-pack: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
`

export const TableDiv = styled.div`
    padding: 15px;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
    div{
        width: 100%;
        .selection{
            select{
                color: #344357;
                font-size: 14px;
                padding: 7px 20px 7px 13px;
                background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
                border: 2px solid #fff;
                border-radius: 8px;
                position: relative;
                cursor: pointer;
            }
            button{
                background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
                border: 2px solid #fff;
                border-radius: 8px;
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
                color: #0d6efc;
                margin-left: 10px;
            }
        }
    }
`