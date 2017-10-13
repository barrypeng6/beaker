import * as Types from '../constants/actionTypes'

export function checkLoginRequest() {
  return {
    type: Types.CHECK_LOGIN_REQUEST
  }
}

export function checkLoginSuccess() {
  return {
    type: Types.CHECK_LOGIN_SUCCESS
  }
}

export function checkLoginFailure(error) {
  return {
    type: Types.CHECK_LOGIN_FAILURE,
    error
  }
}

export function loginRequest(email, password) {
  return {
    type: Types.LOGIN_REQUEST,
    email,
    password
  }
}

export function loginSuccess() {
  return {
    type: Types.LOGIN_SUCCESS
  }
}

export function loginFailure(error) {
  return {
    type: Types.LOGIN_FAILURE,
    error
  }
}

export function logoutRequest() {
  return {
    type: Types.LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: Types.LOGOUT_SUCCESS
  }
}

export function logoutFailure(error) {
  return {
    type: Types.LOGOUT_FAILURE,
    error
  }
}