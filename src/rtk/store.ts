import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { properties } from './features/properties';
import { modal } from './features/modal';
import { property } from './features/property';
export type RootState = ReturnType<typeof store.getState>;

const reducer = {
  properties,
  modal,
  property
};

export const store = configureStore({
  reducer,
  // preloadedState: initialState,
  devTools: true,
});

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({reducer, preloadedState});
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
