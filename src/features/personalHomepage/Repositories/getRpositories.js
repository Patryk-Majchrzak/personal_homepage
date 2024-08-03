import { sendAxiosRequest } from "../../../utils/sendAxiosRequest";

const APIBase = "https://api.github.com";
const username = "Patryk-Majchrzak";
const URL = `${APIBase}/users/${username}/repos`;

export const response = await sendAxiosRequest(URL);