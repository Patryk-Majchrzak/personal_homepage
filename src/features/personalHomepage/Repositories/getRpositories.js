import { sendAxiosRequest } from "../../../utils/sendAxiosRequest";

export const getRepositories = async () => {
    const APIBase = "https://api.github.com";
    const username = "Patryk-Majchrzak";
    const URL = `${APIBase}/users/${username}/repos`;

    const response = await sendAxiosRequest(URL);
    return response.data
}