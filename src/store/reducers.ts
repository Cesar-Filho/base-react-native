import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from './modules/api';

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export {reducers};

export type RootState = ReturnType<typeof reducers>;
