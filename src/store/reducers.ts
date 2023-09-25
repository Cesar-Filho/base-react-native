import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from './modules/api';
import {authReducer} from './modules/auth';

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

export {reducers};

export type RootState = ReturnType<typeof reducers>;
