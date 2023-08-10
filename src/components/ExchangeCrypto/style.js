import { styled } from "styled-components";

export const Transfer = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    border: 0;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
`

export const WatchList = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    border: 0;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
`

export const BuyCrypto = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    border: 0;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
`

export const Input = styled.input`
    box-shadow: none;
    padding: 0.469rem 0.75rem;
    font-size: 14px;
    min-height: 40px;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
    border: 2px solid #fff;
    border-radius: 8px;
    width: 100%;
    &:focus{
        background-color: #fff;
        outline: blue solid;
    }
`

export const Select = styled.select`
    box-shadow: none;
    padding: 0.469rem 0.75rem;
    font-size: 14px;
    min-height: 40px;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
    border: 2px solid #fff;
    border-radius: 8px;
    width: 100%;
    &:focus{
        background-color: #fff;
        outline: blue solid;
    }
`

export const CryptoBox = styled.div`
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-right: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    filter: drop-shadow(0px 4px 4px rgba(200,200,200,0.25));
`

export const Li = styled.li`
    background-color: ${({bgColor})=>bgColor};
    color: ${({color})=>color};
    cursor: pointer;
    width: fit-content;
    font-weight: 700;
    padding: 10px;
`

export const CustomPrice = styled.div`
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.2);
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 3px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    select{
        background-color: #fff;
        height: 100%;
        width: 100px;
        font-size: 14px;
        padding: 5px;
        border-radius: 10px;
        outline: none;
    }
    input{
        background-color: transparent;
        outline: none;
        text-indent: 15px;
    }
`