import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import Config from 'react-native-config';

import {IAuth, ISignIn, IUser} from '../auth/interface';
console.log(Config);
export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.BASE_URL}),
  tagTypes: ['Auth', 'User'],
  endpoints: build => ({
    signIn: build.mutation<IAuth, ISignIn>({
      query: ({username, password}) => ({
        url: 'auth/login',
        method: 'POST',
        body: {username, password},
      }),
    }),
    getUser: build.query<{id: number}, IUser>({
      query: ({id}) => ({
        url: `users/${id}`,
      }),
    }),
  }),
});

export const {useGetUserQuery, useSignInMutation} = apiSlice;
