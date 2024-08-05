import { call, delay, put, takeLatest } from "redux-saga/effects"
import { setRepositories, setRepositoriesError, setRepositoriesSuccess } from "./repositoriesSlice"
import { getRepositories } from "./getRpositories";

function* setRepositoriesHandler() {
    try {
      yield delay(2 * 1000);
      const repositories = yield call(getRepositories);
      yield put(setRepositoriesSuccess(repositories));
    } catch (error) {
      yield put(setRepositoriesError());
    }
  }
  
  export function* repositoriesSaga() {
    yield takeLatest(setRepositories.type, setRepositoriesHandler);
  }