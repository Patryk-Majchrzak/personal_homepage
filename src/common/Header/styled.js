import styled from "styled-components";
import {ReactComponent as Envelope} from "./images/Envelope.svg"

export const HeaderContainer = styled.header`
    max-width:${({theme}) => theme.width.section}px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-gap:66px;
    margin-top:119px;
`

export const Photo = styled.img`
    max-width:20vw;
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

export const ButtonLink =  styled.a`
    display:inline-flex;
    text-decoration: none;
    color: ${({theme}) => theme.colors.linkButtonText};
    font-weight: ${({theme}) => theme.fontWeight.lightBold};
    font-size: ${({theme}) => theme.fontSize.linkButton};
    padding: 12px 16px;
    background-color: ${({theme}) => theme.colors.linkButtonBackground};
    border: ${({theme}) => theme.borders.linkButton};
    align-items:center;

    &:hover {
        box-shadow: ${({theme}) => theme.boxShadows.linkButtonHover}
    }

    @media (max-width: ${({theme}) => theme.breakpoints.verySmall}px){
        font-size: ${({theme}) => theme.fontSize.linkButtonMobile}px
    }
`

export const EnvelopeIcon = styled(Envelope)`
    margin-right: 16px;
`