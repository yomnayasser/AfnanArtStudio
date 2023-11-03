import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {enrolledCourses} from '@common/types';

export interface UserState {
  user: {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    enrolledCourses: enrolledCourses[];
  };
}

const initialState: UserState = {
  user: {
    username: '',
    firstName: '',
    lastName: '',
    age: 0,
    enrolledCourses: [
      {
        name: '',
        sessionsLeft: 0,
        pendingFees: 0,
        cashBack: 0,
        startDate: '',
        endDate: '',
        enrollmentPeriod: 0,
      },
    ],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
    },
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;
