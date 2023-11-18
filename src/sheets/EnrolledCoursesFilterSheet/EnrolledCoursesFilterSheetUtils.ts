import {EnrolledCoursesFilterFaker} from '@fakers/index';
import {updateStudentDashboardFilter} from '@store/index';
import {SheetManager} from 'react-native-actions-sheet';

export const onPressFilter = (
  statuesCheckboxes: boolean[],
  nameCheckboxes: boolean[],
  payload: {setFilterName: Function; setFilterStatus: Function},
  dispatch: any,
) => {
  const selectedCourseStatus: string[] = [];
  const selectedCourseName: string[] = [];
  statuesCheckboxes.map((courseStatus, index) => {
    if (courseStatus) {
      selectedCourseStatus.push(
        EnrolledCoursesFilterFaker[0].courseStatus[index].name,
      );
    }
  });
  nameCheckboxes.map((courseName, index) => {
    if (courseName) {
      selectedCourseName.push(
        EnrolledCoursesFilterFaker[0].coursesName[index].name,
      );
    }
  });
  payload?.setFilterName(selectedCourseName);
  payload?.setFilterStatus(selectedCourseStatus);
  dispatch(
    updateStudentDashboardFilter({
      nameCheckboxes: nameCheckboxes,
      statuesCheckboxes: statuesCheckboxes,
    }),
  );

  SheetManager.hide('EnrolledCoursesFilterSheet');
};

export const clearFilter = (
  setNameCheckboxes: Function,
  setStatusCheckboxes: Function,
  dispatch: any,
  courseName: boolean[],
  courseStatus: boolean[],
) => {
  setNameCheckboxes(new Array(courseName?.length).fill(false));
  setStatusCheckboxes(new Array(courseStatus?.length).fill(false));
  dispatch(
    updateStudentDashboardFilter({
      nameCheckboxes: new Array(courseName?.length).fill(false),
      statuesCheckboxes: new Array(courseStatus?.length).fill(false),
    }),
  );
};
