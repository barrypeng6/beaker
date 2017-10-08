const headers = new Headers({
  "Content-Type": "application/json",
  'x-meepshop-domain': 'admin.stage.meepcloud.com'
});

export function checkLoginStatus() {
  return async (dispatch, getState) => {
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
          dispatch(loginSuccess());
        } else {
          dispatch(loginFail());
        }
      } else {
        console.log('error')
      }
  }
}

export function loginFlow() {
  return async (dispatch, getState) => {
    const res = await fetch('https://api.stage.meepcloud.com/auth/login', {
      method: 'POST',
      headers: headers,
      credentials: 'include',
      body: JSON.stringify({email: "annie@meepshop.com", password: "123456"})
    });
    if(res.status < 400) {
      const data = await res.json();
      console.log(data);
      if(data.code === 404) {
        alert(data.error);
      } else {
        console.log('successful');
        dispatch(loginSuccess());
      }
    } else {
      alert('network error')
    }
  }
}

function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

function loginFail() {
  return {
    type: 'LOGIN_FAIL'
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
    type: 'LOGOUT'
  }
}