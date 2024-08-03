import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./common/LanguageSeletor/languageSlice";
import { themeReducer } from "./common/ThemeSwitch/themeSlice";


export default configureStore({
    reducer: {
        language: languageReducer,
        theme: themeReducer,
    },
})