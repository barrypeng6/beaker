import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFail
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
        // 登入失敗 error: invalid email, password or identity.
        // console.log(data.error);
        yield put(loginFail(data.error))
      } else {
        // console.log('successful');
        yield put(loginSuccess())
      }
    } else {
      alert('network error')
    }
  } catch(error) {
      alert(error);
  }
}