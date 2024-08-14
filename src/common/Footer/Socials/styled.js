import styled from "styled-components"

export const SocialList = styled.ul`
    list-style-type: none;
    display:flex;
`

export const ListItem = styled.li`
    margin-right:24px;
`

export const styledIcon = Icon => styled(Icon)`
    height: auto;
    color: ${({theme}) => theme.colors.textMain};

    @media (max-width:${({theme}) => theme.breakpoints.verySmall}px){
        width: 32px;
    }
` 