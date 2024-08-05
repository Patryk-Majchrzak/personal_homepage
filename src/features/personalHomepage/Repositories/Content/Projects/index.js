import { useSelector } from "react-redux";
import { selectRepositories } from "../../repositoriesSlice";

export const Projects = () => {

    const repositories = useSelector(selectRepositories);

    console.log(repositories)
    return (
        <ul>
            {repositories.map(repository => (
                <li key={repository.name}>
                    <h2>{repository.name}</h2>
                    <p>{repository.description}</p>
                </li>
            ))}
        </ul>
    )
}