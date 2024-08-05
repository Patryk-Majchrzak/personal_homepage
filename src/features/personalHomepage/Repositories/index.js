import { useTranslation } from "react-i18next";
import { Header, RepoHeader, SectionContainer, SubHeader  } from "./RepositioriesSection/styled";
import { Content } from "./Content";

export const Repositories = () => {

    const [t] = useTranslation("translation");

    return (
        <SectionContainer>
            <RepoHeader>
                <Header>Portfolio</Header>
                <SubHeader>{t("Portfolio.Projects")}</SubHeader>
            </RepoHeader>
            <Content />
        </SectionContainer>
    )
}