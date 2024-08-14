import { useTranslation } from "react-i18next";
import { HeaderContainer, Photo, TextContainer, MainHeader, AboutText, ButtonLink, EnvelopeIcon } from "./styled";
import photoMain from "./images/photo_main.jpg";
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
                    <ButtonLink href="mailto:pmaj12345@gmail.com"><EnvelopeIcon />{t("Header.HireButtonText")}</ButtonLink>
                </div>
                <ThemeSwitch />
            </TextContainer>
        </HeaderContainer>
    );
};