import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {enrolledCourses, reservedCourse} from '@common/types';

export interface UserState {
  user: {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    enrolledCourses: enrolledCourses[];
    reservedCourse: reservedCourse[];
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
    reservedCourse: [
      {
        courseName: '',
        upcomingSessionDay: '',
        upcomingSessionTime: '',
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
    setUpcomingSession: (state, action) => {
      const date = action?.payload?.reservedSessionTime.split(' ');
      state?.user?.reservedCourse?.push({
        courseName: action?.payload?.reservedCourseName,
        upcomingSessionDay: date[0],
        upcomingSessionTime: date[1],
      });
    },
  },
});

export const {setUserData, setUpcomingSession} = userSlice.actions;

export default userSlice.reducer;
