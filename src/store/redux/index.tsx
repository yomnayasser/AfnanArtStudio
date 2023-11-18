import {configureStore} from '@reduxjs/toolkit';
import {default as userReducer} from './userReducer';
import {default as studentDashboardReducer} from './studentDashboardReducer';

export const store = configureStore({
  reducer: {userReducer, studentDashboardReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
