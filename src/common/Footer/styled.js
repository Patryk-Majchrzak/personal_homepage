import styled from "styled-components";

export const FooterContainer = styled.footer`
    box-shadow:${({theme}) => theme.boxShadows.section};
    padding-bottom:109px;
`

export const Link = styled.a`
    text-decoration:none;
    font-weight:${({theme}) => theme.fontWeight.veryBold};
    font-size:${({theme}) => theme.fontSize.link}px;
    color: ${({theme}) => theme.colors.textMain};
`

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.textMain};
`