import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAuth} from './interface';

export interface AuthState {
  detail: IAuth | undefined;
  isLogged: boolean;
}

const initialState: AuthState = {
  detail: undefined,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth>) => {
      state.detail = action.payload;
      state.isLogged = true;
    },
    logout: () => initialState,
  },
});

export const authReducer = authSlice.reducer;
export const AuthActions = authSlice.actions;
