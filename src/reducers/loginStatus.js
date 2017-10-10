import {
  CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../actions';

const initialState = {
  isChecking: false, // 是否正在等待檢查登入狀態動作完成
  isLogining: false, // 是否正在等待登入動作完成
  isLogin: false // 是否已登入
};

const loginStatus = (state = initialState, action) => {
  switch(action.type) {
    // 正在等待檢查登入狀態動作完成
    case CHECK_LOGIN_REQUEST: 
    return {
      isChecking: true,
      isLogining: false,
      isLogin: false
    }
    // 正在等待登入動作完成
    case LOGIN_REQUEST: 
      return {
        isChecking: false,
        isLogining: true,
        isLogin: false
      }
    // 檢查完成，登入成功
    case CHECK_LOGIN_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 檢查完成，登入失敗
    case CHECK_LOGIN_FAIL:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登入動作完成，登入成功
    case LOGIN_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 登入動作完成，登入失敗
    case LOGIN_FAIL:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false,
        error: action.error
      };
    // 發出登出請求
    case LOGOUT_REQUEST:
      return {
        isChecking: true,
        isLogining: false,
        isLogin: false
      };
    // 登出成功
    case LOGOUT_SUCCESS:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登出失敗
    case LOGOUT_FAIL:
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    default:
      return state;
  }
}

export default loginStatus;