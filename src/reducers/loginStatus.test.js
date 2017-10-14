import loginStatus, {initialState} from './loginStatus';
import {
  checkLoginRequest,
  checkLoginSuccess,
  checkLoginFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
} from '../actions';

describe('reducers/ loginStatus', () => {

  test('檢查登入請求：應改變isChecking為true', () => {
    const expected = {
      isChecking: true,
      isLogining: false,
      isLogin: false
    };
    const actual = loginStatus(initialState, checkLoginRequest());
    expect(actual).toEqual(expected);
  });

  test('檢查登入成功：應改變isChecking為false，而isLogin為true', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: true
    };
    const actual = loginStatus(initialState, checkLoginSuccess());
    expect(actual).toEqual(expected);
  });

  test('檢查登入失敗應發出錯誤訊息', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: false,
      error: 'error msg'
    };
    const actual = loginStatus(initialState, checkLoginFailure('error msg'));
    expect(actual).toEqual(expected);
  });

  test('登入請求：應改變isLogining為true', () => {
    const expected = {
      isChecking: false,
      isLogining: true,
      isLogin: false
    };
    const actual = loginStatus(initialState, loginRequest());
    expect(actual).toEqual(expected);
  });

  test('登入成功：應改變isLogining為false，而isLogin為true', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: true
    };
    const actual = loginStatus(initialState, loginSuccess());
    expect(actual).toEqual(expected);
  });

  test('登入失敗：應發出錯誤訊息', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: false,
      error: 'error msg'
    };
    const actual = loginStatus(initialState, loginFailure('error msg'));
    expect(actual).toEqual(expected);
  });

  test('登出請求：應改變isChecking為true', () => {
    const expected = {
      isChecking: true,
      isLogining: false,
      isLogin: false
    };
    const actual = loginStatus(initialState, logoutRequest());
    expect(actual).toEqual(expected);
  });

  test('登出成功：應改變isLogining為false，而isLogin為false', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: false
    };
    const actual = loginStatus(initialState, logoutSuccess());
    expect(actual).toEqual(expected);
  });

  test('登出失敗：應發出錯誤訊息，isLogin應還是為true', () => {
    const expected = {
      isChecking: false,
      isLogining: false,
      isLogin: true,
      error: 'error msg'
    };
    const actual = loginStatus(initialState, logoutFailure('error msg'));
    expect(actual).toEqual(expected);
  });

});

