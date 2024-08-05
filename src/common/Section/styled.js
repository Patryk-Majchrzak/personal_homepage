import styled from "styled-components";

export const SectionContainer = styled.section`
    background-color:${({theme}) => theme.colors.sectionBackground};
    box-shadow:${({theme}) => theme.boxShadows.section};
    padding:32px;
    margin:72px auto;
`

export const SectionHeader = styled.h2`
    color: ${({theme}) => theme.colors.textMain};
    border-bottom: 10px black;
`

export const SectionBody = styled.div`
    color: ${({theme}) => theme.colors.textSecondary};
`