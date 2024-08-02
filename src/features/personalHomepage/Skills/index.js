import { useTranslation } from "react-i18next";
import { Section } from "../../../common/Section";
import { renderSkills } from "../skillList/renderSkills";
import { skills } from "../skillList/skills";

export const Skills = () => {
    const [t] = useTranslation("translation");

    return (
        <Section
            title={t("Skills.Title")}
            body={renderSkills(skills)}
        />
    )
};