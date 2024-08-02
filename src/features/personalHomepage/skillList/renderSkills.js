import { List } from "./styled";

export const renderSkills = (skills) => (
    <List>
      {skills.map((skill, index) => {
        if (!Array.isArray(skill)) {
          return (
            <li key={index}>
              {skill}
            </li>
          )
        } else {
          return (
            <li key={index}>
              {skills[index - 1]}
              {renderSkills(skill)}
            </li>
          )
        }
      })}
    </List>
);