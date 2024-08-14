import { useTranslation } from "react-i18next";
import { Content } from "./Content";
import { GHIcon, Header, RepoHeader, SubHeader } from "./styled";

export const Repositories = () => {

    const [t] = useTranslation("translation");

    return (
        <>
            <RepoHeader>
                <a
                    href="https://github.com/Patryk-Majchrzak"
                    target="_blank"
                    rel="noreferrer noopenner"
                    title="https://github.com/Patryk-Majchrzak"
                >
                    <GHIcon />
                </a>
                <Header>Portfolio</Header>
                <SubHeader>{t("Portfolio.Projects")}</SubHeader>
            </RepoHeader>
            <Content />
        </>
    )
}