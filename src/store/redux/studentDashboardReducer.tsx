import {createSlice} from '@reduxjs/toolkit';

export interface studentDashboardState {
  studentDashboard: {
    courseStatusFilter: boolean[];
    courseNameFilter: boolean[];
  };
}

const initialState: studentDashboardState = {
  studentDashboard: {
    courseStatusFilter: [],
    courseNameFilter: [],
  },
};

export const userSlice = createSlice({
  name: 'studentDashboard',
  initialState,
  reducers: {
    updateStudentDashboardFilter: (state, actions) => {
      state.studentDashboard.courseNameFilter = actions?.payload.nameCheckboxes;
      state.studentDashboard.courseStatusFilter =
        actions?.payload?.statuesCheckboxes;
    },
  },
});

export const {updateStudentDashboardFilter} = userSlice.actions;

export default userSlice.reducer;
