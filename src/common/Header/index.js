import { useTranslation } from "react-i18next";
import { HeaderContainer, ImageContainer, Photo, TextContainer, MainHeader, AboutText, Button, Link } from "./styled";
import photoMain from "./photo_main.jpg";
import { ThemeSwitch } from "../ThemeSwitch";
import { SmallCaption } from "../SmallCaption/styled";

export const Header = () => {

    const [t] = useTranslation("translation");

    return (
        <HeaderContainer>
            <div>
                <Photo src={photoMain} alt="author_photo" />
            </div>
            <TextContainer>
            <div>
                <SmallCaption>{t("Header.SmallCaption")}</SmallCaption>
                <MainHeader>Patryk Majchrzak</MainHeader>
                <AboutText>{t("Header.AboutText")}</AboutText>
            <Button><Link href="mailto:pmaj12345@gmail.com">{t("Header.HireButtonText")}</Link></Button>
            </div>
            <ThemeSwitch />
            </TextContainer>
        </HeaderContainer>
    );
};