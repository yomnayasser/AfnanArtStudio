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
        status: -1,
      },
    ],
    reservedCourse: [
      {
        courseName: '',
        upcomingSessionDay: '',
        upcomingSessionStartTime: '',
        upcomingSessionEndTime: '',
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
      console.log('date:>>', date);
      state?.user?.reservedCourse?.push({
        courseName: action?.payload?.reservedCourseName,
        upcomingSessionDay: date[0],
        upcomingSessionStartTime: date[1],
        upcomingSessionEndTime: date[4],
      });
    },
    updateUpcomingSession: (state, action) => {
      const reservedCourseData = state?.user?.reservedCourse;
      const date = action?.payload?.reservedSessionTime.split(' ');
      const updateReservedIndex = reservedCourseData.findIndex(course => {
        return course.courseName === action?.payload?.reservedCourseName;
      });
      console.log('updateReservedIndex:>>', updateReservedIndex);
      if (reservedCourseData[updateReservedIndex]) {
        reservedCourseData[updateReservedIndex] = {
          courseName: action?.payload?.reservedCourseName,
          upcomingSessionDay: date[0],
          upcomingSessionStartTime: date[1],
          upcomingSessionEndTime: date[4],
        };
      }
    },
    deleteUpcomingSession: (state, action) => {
      const reservedCourseData = state?.user?.reservedCourse;
      const deleteReservedIndex = reservedCourseData.findIndex(course => {
        return course.courseName === action?.payload?.reservedCourseName;
      });
      reservedCourseData.splice(deleteReservedIndex, 1);
    },
  },
});

export const {
  setUserData,
  setUpcomingSession,
  updateUpcomingSession,
  deleteUpcomingSession,
} = userSlice.actions;

export default userSlice.reducer;
