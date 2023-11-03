import {configureStore} from '@reduxjs/toolkit';
import {default as userReducer} from './userReducer';

export const store = configureStore({
  reducer: {userReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
