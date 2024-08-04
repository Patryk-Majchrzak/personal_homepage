import { all } from "redux-saga/effects";
import { watchLanguageChange } from "./common/LanguageSeletor/languageSaga";

function* rootSaga() {
    yield all([
        watchLanguageChange(),
    ])
}

export default rootSaga; 