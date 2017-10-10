import { takeEvery, call, put } from 'redux-saga/effects';

import {
  CHECK_LOGIN_REQUEST,
  checkLoginSuccess,
  checkLoginFail
} from '../actions';

import { callApiCheckLogin } from '../api';

export function* watchCheckLogin() {
  yield takeEvery(CHECK_LOGIN_REQUEST, checkLogin)
}

export function* checkLogin() {
  try {
    // 用call是為了可以被測試，因為return 一個plain Object
    const res = yield call(callApiCheckLogin);
    if(res.status < 400) {
      yield put(checkLoginSuccess())
    } else if(res.status === 401) {
      throw new Error('check login fail');
    } else {
      throw new Error('check login fail');
    }
  } catch (error) {
    yield put(checkLoginFail());
  }
}