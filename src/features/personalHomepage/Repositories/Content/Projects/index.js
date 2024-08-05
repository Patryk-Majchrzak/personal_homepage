import { useSelector } from "react-redux";
import { selectRepositories } from "../../repositoriesSlice";

export const Projects = () => {

    const repositories = useSelector(selectRepositories);

    console.log(repositories)
    return (
        <ul>
            {repositories.map(repository => (
                <li key={repository.name}>
                    <div>
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
                    </div>
                </li>
            ))}
        </ul>
    )
}