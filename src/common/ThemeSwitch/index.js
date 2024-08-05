import { useTranslation } from "react-i18next";
import { selectIsDarkTheme, setTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container, IconBox, Button, Icon, ThemeSwitchCaption } from "./styled"

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const [t] = useTranslation("translation");

    const changeTheme = () => dispatch(setTheme())

    return (
        <Container>
            <ThemeSwitchCaption>{t("Theme.DarkMode")} {isDarkTheme ? "on" : "off"}</ThemeSwitchCaption>
            <Button onClick={changeTheme}>
                <IconBox $movetoright={isDarkTheme}>
                    <Icon/>
                </IconBox>
            </Button>
        </Container>
    )
}