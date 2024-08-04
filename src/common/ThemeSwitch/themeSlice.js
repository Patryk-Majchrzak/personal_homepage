import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: false
    },
    reducers: {
        setTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
});

export const { setTheme } = themeSlice.actions;

const themeSliceState = state => state.theme;

export const selectIsDarkTheme = state => themeSliceState(state).isDarkTheme;

export default themeSlice.reducer;