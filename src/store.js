import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/personalHomepage/LanguageSeletor/languageSlice";


export default configureStore({
    reducer: {
        language: languageReducer
    },
})