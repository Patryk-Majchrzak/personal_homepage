import { changeLanguage } from "i18next";
import { selectTitle, setLanguage, setTitle } from "./languageSlice";
import { call, put, select, takeLatest } from "redux-saga/effects";

function* changeLanguageSaga({payload: language}) {
    yield put(setTitle(language))
    const title = yield select(selectTitle);
    
    document.documentElement.lang = language;
    document.title = title;
  
    yield call(changeLanguage, language);
  }
  
  export function* languageSaga() {
    yield takeLatest(setLanguage.type, changeLanguageSaga);
  }