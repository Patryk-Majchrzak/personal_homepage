import { SectionBody, SectionContainer, SectionHeader } from "./styled"

export const Section = ({title, body}) => (
    <SectionContainer>
        <SectionHeader>{title}</SectionHeader>
        <SectionBody>{body}</SectionBody>
    </SectionContainer>
)