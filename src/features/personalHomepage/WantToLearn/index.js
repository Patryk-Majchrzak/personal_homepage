import { useTranslation } from "react-i18next";
import { Section } from "../../../common/Section";
import { renderSkills } from "../skillList/renderSkills";
import { skillsToLearn } from "../skillList/skillsToLearn";

export const WantToLearn = () => {
    
    const [t] = useTranslation("translation");

    return (
        <Section
            title={t("WantToLearn.Title")}
            body={renderSkills(skillsToLearn)}
        />
    )
}