import { useSelector } from "react-redux";
import { selectRepositories } from "../../repositoriesSlice";
import { List, ListItem, Tile } from "./styled";

export const Projects = () => {

    const repositories = useSelector(selectRepositories);

    return (
        <List>
            {repositories.map(repository => (
                <ListItem key={repository.name}>
                        <h2>{repository.name}</h2>
                        <p>{repository.description}</p>
                        <p>
                            Demo: <a
                                href={repository.homepage}
                                target="_blank"
                                rel="norefferer noopener"
                                title="link do strony"
                            >
                                {repository.homepage}
                            </a>
                        </p>
                        <p>
                            Code: <a
                                href={repository.html_url}
                                target="_blank"
                                rel="norefferer noopener"
                                title="link do projektu na GitHubie"
                            >
                                {repository.html_url}
                            </a>
                        </p>
                </ListItem>
            ))}
        </List>
    )
}