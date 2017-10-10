import { call, put } from 'redux-saga/effects';
import { checkLogin } from './checkLogin';
import { callApiCheckLogin } from '../api';
import {
  checkLoginSuccess,
  checkLoginFail
} from '../actions';

describe('sagas/ checkLogin', () => {

  const iterator = checkLogin();

  test('callApiCheckLogin', () => {
    const expected = call(callApiCheckLogin);
    const actual = iterator.next().value;
    expect(actual).toEqual(expected);
  });

  test('checkLogin success', () => {
    const expected = put(checkLoginSuccess());
    const getResponse = () => ({ status: 200 })
    const actual = iterator.next(getResponse()).value;
    expect(actual).toEqual(expected);
  });

  test('checkLogin fail', () => {
    const expected = put(checkLoginFail());
    const actual = iterator.throw('check login fial').value;
    expect(actual).toEqual(expected);
  });

});