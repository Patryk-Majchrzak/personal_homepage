import { all } from "redux-saga/effects";
import { languageSaga } from "./common/LanguageSeletor/languageSaga";
import { repositoriesSaga } from "./features/personalHomepage/Repositories/repositoriesSaga";

function* rootSaga() {
    yield all([
        languageSaga(),
        repositoriesSaga(),
    ])
}

export default rootSaga; 