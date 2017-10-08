export const IS_CHECKING = 'IS_CHECKING';
export const CHECK_IS_LOGIN = 'CHECK_IS_LOGIN';
export const CHECK_IS_LOGOUT = 'CHECK_IS_LOGOUT';

export const IS_LOGINING = 'IS_LOGINING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

const headers = new Headers({
  "Content-Type": "application/json",
  'x-meepshop-domain': 'admin.stage.meepcloud.com'
});

export function checkLoginStatus() {
  return async (dispatch, getState) => {
    dispatch(isChecking());
    const res = await fetch('https://api.stage.meepcloud.com/graphql', {
      method: 'POST',
      headers: headers,
      credentials: 'include',
      body: JSON.stringify({
      query: `
        query Root($search: searchInputObjectType) {
        getStoreList (search: $search) {
            data {
              id
            }
          }
        }`
      })
      }); 
      if(res.status < 400) {
        const data = await res.json();
        if(data) {
          dispatch(checkIsLogin());
        } else {
          console.log('error', data)
        }
      } else {
        console.log('401未授權');
        dispatch(checkIsLogout());
      }
  }
}

function isChecking() {
  return {
    type: IS_CHECKING
  }
}

function checkIsLogin() {
  return {
    type: CHECK_IS_LOGIN
  }
}

function checkIsLogout() {
  return {
    type: CHECK_IS_LOGOUT
  }
}

export function loginFlow(email = '', password = '') {
  return async (dispatch, getState) => {
    dispatch(isLogining());
    const res = await fetch('https://api.stage.meepcloud.com/auth/login', {
      method: 'POST',
      headers: headers,
      credentials: 'include',
      body: JSON.stringify({email, password})
    });
    if(res.status < 400) {
      const data = await res.json();
      console.log(data);
      if(data.code === 404) {
        // 登入失敗 error: invalid email, password or identity.
        console.log(data.error);
        dispatch(loginFail(data.error));
      } else {
        console.log('successful');
        dispatch(loginSuccess());
      }
    } else {
      alert('network error')
    }
  }
}

function isLogining() {
  return {
    type: IS_LOGINING
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  }
}

export function logoutFlow() {
  return async (dispatch, getState) => {
    dispatch(logout())
    await fetch('https://api.stage.meepcloud.com/auth/logout', {
      method: 'GET',
      headers: headers,
      credentials: 'include',
      body: {}
    });
  }
}

function logout() {
  return {
    type: LOGOUT
  }
}