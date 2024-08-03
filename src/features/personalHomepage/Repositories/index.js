import { useTranslation } from "react-i18next";
import { Header, RepoHeader, SectionContainer, SubHeader  } from "./RepositioriesSection/styled";

export const Repositories = ({body}) => {
    const [t] = useTranslation("translation");

    return (
        <SectionContainer>
            <RepoHeader>
                <Header>Portfolio</Header>
                <SubHeader>{t("Portfolio.Projects")}</SubHeader>
            </RepoHeader>
           {body}
        </SectionContainer>
    )
}