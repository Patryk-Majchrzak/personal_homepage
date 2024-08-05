import styled from "styled-components";

export const List = styled.ul`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
`

export const ListItem = styled.li`
    &::marker {
        color:${({theme}) => theme.colors.listMarkers}
    }
`