import { styled } from "styled-components";

export const Main = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 25px;
    @media screen and (max-width: 900px) {
     grid-template-columns: 1fr;
    }
`

export const Right = styled.div`
    .balance{
        background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
        box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        canvas{
            background-color: transparent !important;
            height: min-content;
            width: auto;
        }
    }
`

export const Left = styled.div`
    padding: 15px;
    margin-bottom: 30px;
    background: linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.2) 97.35%,rgba(255,255,255,0) 160.66%),rgba(255,255,255,0.1);
    box-shadow: 0 4px 9px #e1ecff, inset 0 0 15px rgba(255,255,255,.35);
    border-radius: 5px;
    width: 100%;
}
`