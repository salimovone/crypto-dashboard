import { styled } from "styled-components"

export const Main = styled.button`
    width: ${({width})=> width?width:'100%'};
    border-radius: ${({radius})=>radius?radius:'8px'};
    color: ${({color})=>color?color:'white'};
    font-size: 16px;
    font-weight: 500;
    min-width: 100%;
    padding: 8px 20px;
    text-transform: capitalize;
    background-color: ${({bgcolor})=>bgcolor?bgcolor:'#234ce3'};
    margin: ${({margin})=>margin};
    cursor: pointer;
    &:hover{
        background-color: ${({hvcolor})=>hvcolor?hvcolor:'#fe3f51'};
    }
`