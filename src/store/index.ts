import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';

import middleware from './middleware';

import {reducers, RootState} from './reducers';

const config: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
};

export const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer,
  middleware,
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

const getState = () => store;

export type AppDispatch = typeof store.dispatch;
export type TStoreState = ReturnType<typeof getState>;

export {persistor, store};
