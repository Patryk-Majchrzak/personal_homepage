import { useTranslation } from "react-i18next";
import { FooterContainer, Link, Paragraph } from "./styled"
import { SmallCaption } from "../SmallCaption/styled";

export const Footer = () => {

    const [t] = useTranslation("translation");

    return (
        <FooterContainer>
            <SmallCaption>{t("Footer.SmallCaption")}</SmallCaption>
            <Link href="tel:+48510115109">510115109</Link><br/>
            <Link href="mailto:pmaj12345@gmail.com">pmaj12345@gmail.com</Link>
            <Paragraph>{t("Footer.Paragraph")}</Paragraph>
        </FooterContainer>
    )
}