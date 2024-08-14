import { socialMediaList } from "./socialMediaList"
import { ListItem, SocialList } from "./styled";

export const Socials = () => (
    <SocialList>
        {socialMediaList.map(({ name, link, Icon }) => (
            <ListItem key={name}>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={name}
                >
                    <Icon />
                </a>
            </ListItem>
        ))}
    </SocialList>
);