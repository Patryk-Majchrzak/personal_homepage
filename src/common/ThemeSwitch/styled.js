import styled, {css} from "styled-components"
import {ReactComponent as SunIcon} from "./Icon.svg"
import { SmallCaption } from "../SmallCaption/styled"

export const Container = styled.div`
    order: 1;
    display:flex;
    height:28px;
    align-items:center;
`

export const ThemeSwitchCaption = styled(SmallCaption)`

    @media(max-width: 600px){
        display:none;
    }
`

export const Button = styled.button`
    cursor: pointer;
    border: ${({theme}) => theme.borders.themeSwitcher};
    width:48px;
    height:26px;
    margin-left:12px; 
    border-radius:12px;
    background-color: ${({theme}) => theme.colors.themeSwitcherBackground};
`

export const IconBox = styled.div`
    background-color:${({theme}) => theme.colors.iconBoxBackground};
    width:20px;
    height:20px;
    border-radius:50%;
    transition: transform 0.2s;
    padding:3px;
    display: flex;

    ${({ $movetoright }) =>
    $movetoright &&
    css`
      transform: translateX(20px);
    `}
`

export const Icon = styled(SunIcon)`
    color:${({theme}) => theme.colors.icon}
` 