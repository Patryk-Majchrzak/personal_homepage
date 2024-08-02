import { SectionContainer } from "./styled"

export const Section = ({title, body}) => (
    <SectionContainer>
        <h2>{title}</h2>
        <div>{body}</div>
    </SectionContainer>
)