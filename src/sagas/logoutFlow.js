import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';

import {
  LOGOUT_REQUEST,
  logoutSuccess,
  logoutFailure
} from '../actions';

import {
  callApiLogout
} from '../api';

export function* watchLogoutFlow() {
  yield takeEvery(LOGOUT_REQUEST, logoutFlow);
}

export function* logoutFlow() {
  try {
    yield call(callApiLogout);
    yield put(logoutSuccess());
  } catch(error) {
    console.log(error);
    yield put(logoutFailure());
  }
}