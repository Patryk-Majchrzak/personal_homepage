import { Header, RepoHeader, SectionContainer, SubHeader  } from "./RepositioriesSection/styled";

export const Repositories = ({body}) => {
    return (
        <SectionContainer>
            <RepoHeader>
                <Header>Portfolio</Header>
                <SubHeader>My recent projects</SubHeader>
            </RepoHeader>
           {body}
        </SectionContainer>
    )
}