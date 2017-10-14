import { takeEvery, call, put } from 'redux-saga/effects';
import { watchLoginFlow, loginFlow } from './loginFlow';
import { callApiLoginFlow } from '../api';
import { LOGIN_REQUEST } from '../constants/actionTypes';
import {
  loginSuccess,
  loginFailure
} from '../actions';

describe('sagas/ loginFlow', () => {

  test('收到 action: LOGIN_REQUEST，是否有執行 fn: loginFlow', () => {
    const iterator = watchLoginFlow()
    const expected = takeEvery(LOGIN_REQUEST, loginFlow);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  const email = 'annie@meepshop.com';
  const password = '123456';
  const iterator = loginFlow({type: LOGIN_REQUEST, email, password });
  test('是否有call正確的api', () => {
    const expected = call(callApiLoginFlow, { email, password });
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  test('是否有正確處理 successful response', () => {
    const expected = put(loginSuccess());
    const actual = iterator.next({}).value;
    expect(actual).toEqual(expected);
  });
  
  const error = new Error('error');
  test('是否有正確處理 failure response', () => {
    const expected = put(loginFailure(error.message));
    const actual = iterator.throw(error).value;
    expect(actual).toEqual(expected);
  });
});