import styled from "styled-components";

export const Tile = styled.div`

`

export const List = styled.ul`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    list-style-type: none;
    grid-gap:32px; 
    padding:32px;
    margin: 0 auto; 
`

export const ListItem = styled.li`
    background-color:${({theme}) => theme.colors.repoTiles};
    color: ${({theme}) => theme.colors.textMain};
    padding:56px;
`