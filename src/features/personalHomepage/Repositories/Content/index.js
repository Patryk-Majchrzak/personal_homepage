import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, setRepositories } from "../repositoriesSlice";
import { Loading } from "./Loading";
import { Projects } from "./Projects";
import { Error } from "./Error";

export const Content = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(setRepositories())
}, [dispatch]);

const status = useSelector(selectStatus);

switch(status){
    case "initial":
        return null;
    case "loading":
        return <Loading />
    case "success":
        return <Projects />
    case "error":
        return <Error />
}
}