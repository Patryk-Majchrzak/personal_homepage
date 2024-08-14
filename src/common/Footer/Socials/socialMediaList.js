import {ReactComponent as GitHubIcon} from "../../../socialIcons/github.svg"
import {ReactComponent as FacebookIcon} from "../../../socialIcons/facebook.svg"
import {ReactComponent as LinkedInIcon} from "../../../socialIcons/linkedIn.svg"
import { styledIcon } from "./styled"

export const socialMediaList = [
    {
        name: "GitHub",
        link: "https://github.com/Patryk-Majchrzak",
        Icon: styledIcon(GitHubIcon)
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/patryk.majchrzak1",
        Icon: styledIcon(FacebookIcon)
    },
    {
        name:"LinkedIn",
        link: "https://www.linkedin.com/in/patryk-majchrzak-b468b9141/",
        Icon: styledIcon(LinkedInIcon)
    }
]