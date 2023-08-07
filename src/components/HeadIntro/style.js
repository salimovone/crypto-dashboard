import { styled } from "styled-components";

export const Main = styled.div`
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 15px;
    .hIntro-red-button{
        font-size: 16px;
        font-weight: 600;
        background: #fe3f51;
        border-radius: 10px;
        min-width: 180px;
        display: inline-block;
        text-align: center;
        padding: 8px 15px;
        color: #fff;
    }
    .hIntro-btn-book{
        color: #344357;
        font-size: 14px;
        padding: 7px 20px 7px 13px;
        background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
        border: 2px solid #fff;
        border-radius: 8px;
        cursor: pointer;
    }
}
`