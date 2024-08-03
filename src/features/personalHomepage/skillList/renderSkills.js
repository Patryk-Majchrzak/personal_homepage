import { List } from "./styled";

export const renderSkills = (skills) => (
  <List>
    {skills.map((skill, index) => {
      if (!Array.isArray(skill)) {
        return <li key={index}>{skill}</li>;
      } else {
        return (
          <li key={index}>
            {skills[index - 1]}
            {renderSubslist(skill)}
          </li>
        );
      }
    })}
  </List>
);

const renderSubslist = (skill) => (
  <ul>
    {skill.map((oneSkill, index) => (
      <li key={index}>{oneSkill}</li>
    ))}
  </ul>
);
