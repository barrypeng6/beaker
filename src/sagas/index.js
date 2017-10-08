import {
    takeEvery,
    call,
    put,
    all
  } from 'redux-saga/effects'
  import {
    CHECK_LOGIN_REQUEST,
    checkIsLogin,
    checkIsLogout,

    LOGIN_REQUEST,
    loginSuccess,
    loginFail,
    
    LOGOUT_REQUEST,
    logoutSuccess,
    logoutFail
  } from '../actions';
  
  import {
    callApiCheckLogin,
    callApiLoginFlow,
    callApiLogout
  } from '../api';
  
  function* watchCheckLogin() {
    yield takeEvery(CHECK_LOGIN_REQUEST, checkLogin)
  }
  
  function* checkLogin() {
    try {
      // const res = yield callApiCheckLogin();
      // 用call是為了可以被測試，因為return 一個plain Object
      const res = yield call(callApiCheckLogin);
      // console.log(call(callApiCheckLogin))
      // const data = yield res.json();
      // console.log('saga', data);
      if(res.status < 400) {
        yield put(checkIsLogin())
      } else if(res.status === 401) {
        yield put(checkIsLogout())
      } else {
          alert('error')
      }
    } catch (error) {
      alert(error);
    }
  }

  function* watchLoginFlow() {
      yield takeEvery(LOGIN_REQUEST, loginFlow)
  }

  function* loginFlow(action) {
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

  function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logoutFlow);
  }

  function* logoutFlow() {
    try {
      yield call(callApiLogout);
      yield put(logoutSuccess());
    } catch(error) {
      console.log(error);
      yield put(logoutFail());
    }
  }

  function* rootSaga() {
    yield all([
        watchCheckLogin(),
        watchLoginFlow(),
        watchLogout()
    ])
}

export default rootSaga;