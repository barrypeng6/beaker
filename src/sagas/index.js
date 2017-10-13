import { all } from 'redux-saga/effects';

import { watchCheckLogin } from './checkLogin';
import { watchLoginFlow } from './loginFlow';
import { watchLogoutFlow } from './logoutFlow';

function* rootSaga() {
  yield all([
      watchCheckLogin(),
      watchLoginFlow(),
      watchLogoutFlow(),
  ])
}

export default rootSaga;