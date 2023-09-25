import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {AppDispatch} from './index';
import type {RootState} from './reducers';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
