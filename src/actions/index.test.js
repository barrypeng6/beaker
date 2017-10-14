import * as actions from './';
import * as Types from '../constants/actionTypes';

// 檢查登入：
// Action Type: CHECK_LOGIN_REQUEST
// Action creator: checkLoginRequest()
describe('action creators', () => {
  test(`create an action to ${'actions.checkLoginRequest'}`, () => {
    const expected = { type: Types.CHECK_LOGIN_REQUEST };
    const actual = actions.checkLoginRequest();
    expect(actual).toEqual(expected);
  });
});

// 檢查登入成功：
// Action Type: CHECK_LOGIN_SUCCESS
// Action creator: checkLoginSuccess()
describe('action creators', () => {
  test(`create an action to ${'actions.checkLoginSuccess'}`, () => {
    const expected = { type: Types.CHECK_LOGIN_SUCCESS };
    const actual = actions.checkLoginSuccess();
    expect(actual).toEqual(expected);
  });
});

// 檢查登入失敗：
// Action Type: CHECK_LOGIN_FAILURE
// Action creator: checkLoginFailure(error)
describe('action creators', () => {
  test(`create an action to ${'actions.checkLoginFailure'}`, () => {
    const error = 'error msg'
    const expected = {
      type: Types.CHECK_LOGIN_FAILURE,
      error
    };
    const actual = actions.checkLoginFailure(error);
    expect(actual).toEqual(expected);
  });
});

// 登入請求：
// Action Type: LOGIN_REQUEST
// Action creator: loginRequest(email, password)
describe('action creators', () => {
  test(`create an action to ${'actions.loginRequest'}`, () => {
    const email = 'annie@meepshop.com';
    const password = '123456';
    const expected = {
      type: Types.LOGIN_REQUEST,
      email,
      password
    };
    const actual = actions.loginRequest(email, password);
    expect(actual).toEqual(expected);
  });
});

// 登入成功：
// Action Type: LOGIN_SUCCESS
// Action creator: loginSuccess()
describe('action creators', () => {
  test(`create an action to ${'actions.loginSuccess'}`, () => {
    const expected = { type: Types.LOGIN_SUCCESS };
    const actual = actions.loginSuccess();
    expect(actual).toEqual(expected);
  });
});

// 登入失敗：
// Action Type: LOGIN_FAILURE
// Action creator: loginFailure(error)
describe('action creators', () => {
  test(`create an action to ${'actions.loginFailure'}`, () => {
    const error = 'invalid email, password or identity.';
    const expected = {
      type: Types.LOGIN_FAILURE,
      error
    };
    const actual = actions.loginFailure(error);
    expect(actual).toEqual(expected);
  });
});

// 登出請求：
// Action Type: LOGOUT_REQUEST
// Action creator: logoutRequest()
describe('action creators', () => {
  test(`create an action to ${'actions.logoutRequest'}`, () => {
    const expected = { type: Types.LOGOUT_REQUEST };
    const actual = actions.logoutRequest();
    expect(actual).toEqual(expected);
  });
});

// 登出成功：
// Action Type: LOGOUT_SUCCESS
// Action creator: logoutSuccess()
describe('action creators', () => {
  test(`create an action to ${'actions.logoutSuccess'}`, () => {
    const expected = { type: Types.LOGOUT_SUCCESS };
    const actual = actions.logoutSuccess();
    expect(actual).toEqual(expected);
  });
});

// 登出失敗：
// Action Type: LOGOUT_FAILURE
// Action creator: logoutFailure(error)
describe('action creators', () => {
  test(`create an action to ${'actions.logoutFailure'}`, () => {
    const error = 'error msg';
    const expected = {
      type: Types.LOGOUT_FAILURE,
      error
    };
    const actual = actions.logoutFailure(error);
    expect(actual).toEqual(expected);
  });
});