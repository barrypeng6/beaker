const initialState = {
  isChecking: false, // 是否正在等待檢查登入狀態動作完成
  isLogining: false, // 是否正在等待登入動作完成
  isLogin: false // 是否已登入
};

const loginStatus = (state = initialState, action) => {
  switch(action.type) {
    // 正在等待檢查登入狀態動作完成
    case 'IS_CHECKING': 
    return {
      isChecking: true,
      isLogining: false,
      isLogin: false
    }
    // 正在等待登入動作完成
    case 'IS_LOGINING': 
      return {
        isChecking: false,
        isLogining: true,
        isLogin: false
      }
    // 檢查完成，已登入
    case 'CHECK_IS_LOGIN':
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 檢查完成，未登入
    case 'CHECK_IS_LOGOUT':
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登入動作完成，登入成功
    case 'LOGIN_SUCCESS':
      return {
        isChecking: false,
        isLogining: false,
        isLogin: true
      };
    // 登入動作完成，登入失敗
    case 'LOGIN_FAIL':
      return {
        isChecking: false,
        isLogining: false,
        isLogin: false
      };
    // 登出完成
    case 'LOGOUT':
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