import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import Config from 'react-native-config';

import {IAuth, ISignIn, IUser} from '../auth/interface';
import {RootState} from '@store/reducers';

export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.detail.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'User'],
  endpoints: build => ({
    signIn: build.mutation<IAuth, ISignIn>({
      query: ({username, password}) => ({
        url: 'auth/login',
        method: 'POST',
        body: {username, password},
      }),
    }),
    getUser: build.query<IUser, {id: number}>({
      query: ({id}) => ({
        url: `users/${id}`,
      }),
    }),
  }),
});

export const {useGetUserQuery, useSignInMutation} = apiSlice;
