import styled, {css} from "styled-components"

export const Container = styled.div`
    order: 1;
    display:flex;
    height:28px;
    align-items:center;
`

export const Button = styled.button`
    border: ${({theme}) => theme.borders.themeSwitcher};
    width:48px;
    height:26px;
    margin-left:12px;
    border-radius:30px;
    background-color: ${({theme}) => theme.colors.themeSwitcherBackground};
`

export const IconBox = styled.div`
    background-color:${({theme}) => theme.colors.iconBoxBackground};
    width:20px;
    height:20px;
    border-radius:50%;
    transition: transform 0.2s;

    ${({ $movetoright }) =>
    $movetoright &&
    css`
      transform: translateX(20px);
    `}
`

export const Icon = styled.img`
` 