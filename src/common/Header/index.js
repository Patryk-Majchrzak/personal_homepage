import { useTranslation } from "react-i18next";
import { HeaderContainer, ImageContainer, Photo, TextContainer, MainHeader, FirstCaption, AboutText, Button } from "./styled";
import photoMain from "./photo_main.jpg";

export const Header = () => {

    const [t] = useTranslation("translation");

    return (
        <HeaderContainer>
            <ImageContainer>
                <Photo src={photoMain} alt="author_photo" />
            </ImageContainer>
            <TextContainer>
                <FirstCaption>{t("Header.FirstCaption")}</FirstCaption>
                <MainHeader>Patryk Majchrzak</MainHeader>
                <AboutText>{t("Header.AboutText")}</AboutText>
            <Button><a href="mailto:pmaj12345@gmail.com">{t("Header.HireButtonText")}</a></Button>
            </TextContainer>
        </HeaderContainer>
    );
};