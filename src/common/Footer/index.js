import { useTranslation } from "react-i18next";
import { FooterContainer, Link, Paragraph } from "./styled"
import { SmallCaption } from "../SmallCaption/styled";
import { Socials } from "./Socials";

export const Footer = () => {

    const [t] = useTranslation("translation");

    return (
        <FooterContainer>
            <SmallCaption>{t("Footer.SmallCaption")}</SmallCaption>
            <Link href="mailto:pmaj12345@gmail.com">pmaj12345@gmail.com</Link><br/>
            <Link href="tel:+48510115109">510115109</Link>
            <Paragraph>{t("Footer.Paragraph")}</Paragraph>
            <Socials />
        </FooterContainer>
    )
}