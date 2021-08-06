import {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOGOUT_USER,
    CURRENT_USER,
    EDIT_USER_fail,
    EDIT_USER,
    GET_USER,
    DELETE_USER_fail,
    DELETE_USER,
    GET_ONE_USER_fail,
    GET_ONE_USER,
  } from "../const/user";
  
  const initialState = {
    user:{},
    loadUser:false,
    errors:null,
    isAuth:false,
    users:[]
  };
  
  export const userReducer=(state=initialState,{type,payload}) => {
    switch (type) {
      case REGISTER_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, loadUser: false, user: payload.user, isAuth: true };
      case LOGIN_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, loadUser: false, user: payload.user, isAuth: true };
      case LOAD_USER:
        return { ...state, loadUser: true };
      case CURRENT_USER:
        return { ...state, loadUser: false, isAuth: true, user:payload };
      case FAIL_USER:
        return { ...state, loadUser: false, errors: payload };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return { user: null, loadUser: false, errors: null, isAuth: false };
        case EDIT_USER:
        return { ...state, loadUser: false, isAuth: true, user:payload };
        case EDIT_USER_fail:
        return { ...state, loadUser: false, errors: payload };
        case GET_USER:
        return { ...state, loadUser: false, isAuth: true, users:payload };
        case DELETE_USER:
        return { ...state, loadUser: false, isAuth: true, user:payload };
        case DELETE_USER_fail:
        return { ...state, loadUser: false, errors: payload };
        case GET_ONE_USER:
        return { ...state, loadUser: false, isAuth: true, user:payload };
        case GET_ONE_USER_fail:
        return { ...state, loadUser: false, isAuth: true, error:payload };
      default:
        return state;
    }
  };