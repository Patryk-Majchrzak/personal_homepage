import { useTranslation } from "react-i18next";
import { Header, RepoHeader, SectionContainer, SubHeader  } from "./RepositioriesSection/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositories, setRepositories } from "./repositoriesSlice";
import { useEffect } from "react";

export const Repositories = ({body}) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setRepositories())
    }, [dispatch]);

    const repositories = useSelector(selectRepositories);

    const [t] = useTranslation("translation");

    return (
        <SectionContainer>
            <RepoHeader>
                <Header>Portfolio</Header>
                <SubHeader>{t("Portfolio.Projects")}</SubHeader>
            </RepoHeader>
        </SectionContainer>
    )
}