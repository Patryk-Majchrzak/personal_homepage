import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: "en",
        title: "Personal homepage"
    },
    reducers:
    {
        setLanguage: (state, {payload: language}) => {
            state.language = language
        },
        setTitle: (state, {payload: language}) => {
            state.title = language === "en" ? "Personal homepage" : "Moja wizytówka"
        }
    },
});

export const {
    setLanguage,
    setTitle
} = languageSlice.actions;

const selectLanguageState = state => state.language;

export const selectLanguage = state => selectLanguageState(state).language;
export const selectTitle = state => selectLanguageState(state).title;

export default languageSlice.reducer;