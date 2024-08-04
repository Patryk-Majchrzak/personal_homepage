import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import languageReducer from "./common/LanguageSeletor/languageSlice";
import themeReducer from "./common/ThemeSwitch/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        language: languageReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);