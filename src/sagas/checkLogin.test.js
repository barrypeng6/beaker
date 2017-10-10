import { takeEvery, call, put } from 'redux-saga/effects';
import { watchCheckLogin, checkLogin } from './checkLogin';
import { callApiCheckLogin } from '../api';
import { CHECK_LOGIN_REQUEST } from '../constants/actionTypes';
import {
  checkLoginSuccess,
  checkLoginFailure
} from '../actions';

describe('sagas/ checkLogin', () => {

  // 測試項目：收到 action: CHECK_LOGIN_REQUEST，是否有執行 fn: checkLogin
  test('watch', () => {
    const iterator = watchCheckLogin()
    const expected = takeEvery(CHECK_LOGIN_REQUEST, checkLogin);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  // 測試項目：是否有call正確的api
  const iterator = checkLogin();
  test('api request', () => {
    const expected = call(callApiCheckLogin);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  // 測試項目：是否有正確處理 successful response
  test('success', () => {
    const expected = put(checkLoginSuccess());
    const getResponse = () => ({ status: 200 })
    const actual = iterator.next(getResponse()).value;
    expect(actual).toEqual(expected);
  });

  // 測試項目：是否有正確處理 failure response
  test('fail', () => {
    const expected = put(checkLoginFailure());
    const actual = iterator.throw('check login fial').value;
    expect(actual).toEqual(expected);
  });
});