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
    const data = yield call(callApiLoginFlow, {email: action.email, password: action.password});
    if(data.error) {
      // 登入失敗
      throw new Error(data.error);
    } else {
      // 登入成功
      yield put(loginSuccess());
    }
  } catch(error) {
      yield put(loginFailure(error.message));
  }
}