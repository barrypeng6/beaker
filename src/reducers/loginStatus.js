import * as Types from '../constants/actionTypes'

export const initialState = {
  isChecking: false, // 是否正在等待檢查登入狀態動作完成
  isLogining: false, // 是否正在等待登入動作完成
  isLogin: false // 是否已登入
};

const loginStatus = (state = initialState, action) => {
  switch(action.type) {
    // 檢查登入請求
    case Types.CHECK_LOGIN_REQUEST: 
      return {
        isChecking: true,
        isLogining: false,
        isLogin: false
      };
    // 檢查登入成功
    case Types.CHECK_LOGIN_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 檢查登入失敗
    case Types.CHECK_LOGIN_FAILURE:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登入請求
    case Types.LOGIN_REQUEST: 
      return {
        isChecking: false,
        isLogining: true,
        isLogin: false
      };
    // 登入成功
    case Types.LOGIN_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 登入失敗
    case Types.LOGIN_FAILURE:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false,
        error: action.error
      };
    // 登出請求
    case Types.LOGOUT_REQUEST:
      return {
        isChecking: true,
        isLogining: false,
        isLogin: false
      };
    // 登出成功
    case Types.LOGOUT_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登出失敗
    case Types.LOGOUT_FAILURE:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true,
        error: action.error
      };
    default:
      return state;
  }
}

export default loginStatus;