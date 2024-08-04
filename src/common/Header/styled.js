import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width:${({theme}) => theme.width.section}px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-gap:66px;
    margin-top:119px;
`

export const Photo = styled.img`
    max-width:398px;
    border-radius:50%;
`

export const TextContainer = styled.div`
    display:grid;
    grid-template-columns:1fr auto;
`

export const MainHeader = styled.h1`
    font-weight:${({theme}) => theme.fontWeight.veryBold};
    font-size:${({theme}) => theme.fontSize.mainHeader}px;
    color: ${({theme}) => theme.colors.textMain};
`

export const AboutText = styled.p`
    font-size: 20px;
    color: ${({theme}) => theme.colors.textSecondary};
`

export const Link =  styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.buttonText};
`

export const Button = styled.button`
    padding: 12px 16px;
    background-color: ${({theme}) => theme.colors.buttonBackground};
    border:none;
`