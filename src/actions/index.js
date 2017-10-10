export const CHECK_LOGIN_REQUEST = 'CHECK_LOGIN_REQUEST';
export const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS';
export const CHECK_LOGIN_FAIL = 'CHECK_LOGIN_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export function checkLoginRequest() {
  return {
    type: CHECK_LOGIN_REQUEST
  }
}

export function checkLoginSuccess() {
  return {
    type: CHECK_LOGIN_SUCCESS
  }
}

export function checkLoginFail() {
  return {
    type: CHECK_LOGIN_FAIL
  }
}

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  }
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutFail() {
  return {
    type: LOGOUT_FAIL
  }
}