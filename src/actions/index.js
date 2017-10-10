export const CHECK_LOGIN_REQUEST = 'CHECK_LOGIN_REQUEST';
export const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS';
export const CHECK_LOGIN_FAILURE = 'CHECK_LOGIN_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

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

export function checkLoginFailure() {
  return {
    type: CHECK_LOGIN_FAILURE
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

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
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

export function logoutFailure() {
  return {
    type: LOGOUT_FAILURE
  }
}