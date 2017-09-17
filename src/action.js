const FETCH_STORE_LIST = 'FETCH_STORE_LIST';
const HANDLE_LOGIN = 'HANDLE_LOGIN';
const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export function handleLogin() {
  return {
    type: HANDLE_LOGIN
  }
}

export function handleLogout() {
  return {
    type: HANDLE_LOGOUT
  }
}

export function fetchStoreList() {
  return {
    type: FETCH_STORE_LIST
  }
}