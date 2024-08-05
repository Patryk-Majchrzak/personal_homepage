import { List, ListItem } from "./styled";

export const renderSkills = (skills) => (
  <List>
    {skills.map((skill, index) => {
      if (!Array.isArray(skill)) {
        return <ListItem key={index}>{skill}</ListItem>;
      } else {
        return (
          <ListItem key={index}>
            {skills[index - 1]}
            {renderSubslist(skill)}
          </ListItem>
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
