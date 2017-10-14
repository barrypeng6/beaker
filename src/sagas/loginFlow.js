import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../constants/actionTypes';
import {
  loginSuccess,
  loginFailure
} from '../actions';

import {
  callApiLoginFlow
} from '../api';

export function* watchLoginFlow() {
  yield takeEvery(LOGIN_REQUEST, loginFlow)
}

export function* loginFlow(action) {
  try {
    const res = yield call(callApiLoginFlow, {email: action.email, password: action.password});
    if(res.status < 400) {
      const data = yield res.json();
      if(data.code === 404) {
        // 登入失敗：帳號密碼錯誤
        throw new Error(data.error);
      } else {
        // 登入成功
        yield put(loginSuccess());
      }
    } else {
      // 登入失敗
      throw new Error('network error');
    }
  } catch(error) {
      yield put(loginFailure(error.message));
  }
}