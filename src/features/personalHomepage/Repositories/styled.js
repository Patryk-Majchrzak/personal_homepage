import styled from "styled-components";
import {ReactComponent as GitHubIcon} from "../../../socialIcons/github.svg"

export const RepoHeader = styled.header`
    text-align:center;
`

export const Header = styled.h2`
`

export const SubHeader = styled.h3`
`

export const GHIcon = styled(GitHubIcon)`
    color: ${({theme}) => theme.colors.iconGH}
` 