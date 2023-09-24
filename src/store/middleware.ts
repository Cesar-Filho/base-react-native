import {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {apiSlice} from './modules/api';

export default (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
  }).concat(apiSlice.middleware);

  return middleware;
};
