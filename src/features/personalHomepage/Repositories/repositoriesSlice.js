import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {
        status: "initial",
        repositories: null
    },
    reducers:
    {
        setRepositories: (state) => {
            state.status = "loading";
            state.repositories = null;
        },
        setRepositoriesSuccess: (state, {payload: projects }) => {
            state.status = "success";
            state.repositories = projects;
        },
        setRepositoriesError: (state) => {
            state.status = "error";
            state.repositories = null;
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