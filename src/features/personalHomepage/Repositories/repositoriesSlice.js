import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {
        status: "initial",
        repositories: null
    },
    reducers:
    {
        setRepositories: ({ status }) => {
            status = "loading"
        },
        setRepositoriesSuccess: ({ status, repositories }, { payload: projects }) => {
            status = "success";
            repositories = projects;
        },
        setRepositoriesError: ({ status, repositories }) => {
            status = "error";
            repositories = null
        }
    },
});

export const {
    setRepositories,
    setRepositoriesSuccess,
    setRepositoriesError
} = repositoriesSlice.actions;

const selectRepositoriesState = state => state.repositories;

export const selectStatus = state => selectRepositoriesState(state).status;
export const selectRepositories = state => selectRepositoriesState(state).repositories;

export default repositoriesSlice.reducer;