import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.websiteBackground};
    transition: background 0.2s
`

export const Main = styled.main`
    max-width:${({theme}) => theme.width.document}px;
    margin: 0 auto;
`