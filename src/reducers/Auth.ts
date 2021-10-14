import {Dispatch, Reducer, createContext, Context, useReducer} from "react";


export const authState = {
  isLogged: false
}

export const LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION';
export const LOGIN_FAIL_ACTION = 'LOGIN_FAIL_ACTION';

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS_ACTION
}

export type LoginFail = {
  type: typeof LOGIN_FAIL_ACTION
}

export type AuthActions = LoginSuccess | LoginFail;
export const authReducer: Reducer<typeof authState, AuthActions> = (state, action) => {
  switch (action.type) {
    case LOGIN_FAIL_ACTION:
      return {
        ...state,
        isLogged: false
      }

    case LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        isLogged: true
      }
  }
  return state;
}

export const useAuthReducer = () => useReducer(authReducer, authState);
export const authContextValue = (dispatch: Dispatch<AuthActions>)  => ({
  loginSuccess:() => dispatch({type: LOGIN_SUCCESS_ACTION}),
  loginFail:() => dispatch({type: LOGIN_FAIL_ACTION})
})

export const AuthContext =  createContext({} as ReturnType<typeof authContextValue> & typeof authState);

