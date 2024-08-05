import styled from "styled-components"

export const SmallCaption = styled.p`
    font-weight:${({theme}) => theme.fontWeight.bold};
    font-size: ${({theme}) => theme.fontSize.small};
    color: ${({theme}) => theme.colors.textSecondary};
    text-transform:uppercase;
`