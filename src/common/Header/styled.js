import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width:1088px;
    display:grid;
    grid-template-columns: 1fr 2fr auto;
    grid-gap:72px;
    margin-top:119px;
`

export const ImageContainer = styled.div`
`

export const Photo = styled.img`
    width:398px;
    border-radius:50%;
`

export const TextContainer = styled.div`
`

export const FirstCaption = styled.p`
    font-weight:700;
    font-size: 12px;
    color: rgba(110, 126, 145, 1);
`

export const MainHeader = styled.h1`
    font-weight:900;
    font-size:38px;
    color: rgba(37, 37, 37, 1);
`

export const AboutText = styled.p`
    font-weight:400;
    font-size: 20px;
    color: rgba(110, 126, 145, 1);
`

export const Link =  styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
`

export const Button = styled.button`
    padding: 12px 16px;
    background-color: rgba(3, 102, 214, 1);
`