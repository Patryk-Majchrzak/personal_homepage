import { useTranslation } from "react-i18next";
import { Container, IconBox, Button } from "./styled"
import { SmallCaption } from "../SmallCaption/styled";
import { selectIsDarkTheme, setTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const [t] = useTranslation("translation");

    const changeTheme = () => dispatch(setTheme())

    return (
        <Container>
            <SmallCaption>{t("Theme.DarkMode")} {isDarkTheme ? "on" : "off"}</SmallCaption>
            <Button onClick={changeTheme}>
                <IconBox $movetoright={isDarkTheme}>
                </IconBox>
            </Button>
        </Container>
    )
}