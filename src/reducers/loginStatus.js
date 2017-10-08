const loginStatus = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return true;
    case 'LOGIN_FAIL':
      return false;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}

export default loginStatus;