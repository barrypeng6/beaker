import { takeEvery, call, put } from 'redux-saga/effects';
import { watchCheckLogin, checkLogin } from './checkLogin';
import { callApiCheckLogin } from '../api';
import { CHECK_LOGIN_REQUEST } from '../constants/actionTypes';
import {
  checkLoginSuccess,
  checkLoginFailure
} from '../actions';

describe('sagas/ checkLogin', () => {

  test('收到 action: CHECK_LOGIN_REQUEST，是否有執行 fn: checkLogin', () => {
    const iterator = watchCheckLogin()
    const expected = takeEvery(CHECK_LOGIN_REQUEST, checkLogin);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  const iterator = checkLogin();
  test('是否有call正確的api', () => {
    const expected = call(callApiCheckLogin);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  test('是否有正確處理 successful response', () => {
    const expected = put(checkLoginSuccess());
    const actual = iterator.next({isLogin: true}).value;
    expect(actual).toEqual(expected);
  });

  const error = new Error('error');
  test('是否有正確處理 failure response', () => {
    const expected = put(checkLoginFailure(error.message));
    const actual = iterator.throw(error).value;
    expect(actual).toEqual(expected);
  });
});