import { takeEvery, call, put } from 'redux-saga/effects';
import { CHECK_LOGIN_REQUEST } from '../constants/actionTypes';
import {
  checkLoginSuccess,
  checkLoginFailure
} from '../actions';

import { callApiCheckLogin } from '../api';

export function* watchCheckLogin() {
  yield takeEvery(CHECK_LOGIN_REQUEST, checkLogin)
}

export function* checkLogin() {
  try {
    // 用call是為了可以被測試，因為return 一個plain Object
    const data = yield call(callApiCheckLogin);
    if(data.isLogin) {
      // 已登入狀態
      yield put(checkLoginSuccess())
    } else {
      // 未登入狀態
      throw new Error('check login fail');
    }
  } catch (error) {
    yield put(checkLoginFailure(error.message));
  }
}