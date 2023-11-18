import {EnrolledCoursesStatusEnum} from '@common/enums';
import {enrolledCoursesTypes} from '@common/types';

export const getEnrolledCoursesData = (
  filterName: string[],
  enrolledCourses: enrolledCoursesTypes[],
  filterStatus: string[],
  setEnrolledCourses: Function,
) => {
  if (filterName.length !== 0) {
    const filterCourse: enrolledCoursesTypes[] = [];
    enrolledCourses?.map(course => {
      if (filterName.includes(course.name)) {
        if (filterStatus.length > 0) {
          if (filterStatus.includes(EnrolledCoursesStatusEnum[course.status])) {
            filterCourse.push(course);
          }
        } else {
          filterCourse.push(course);
        }
      }
    });
    setEnrolledCourses(filterCourse);
  } else if (filterStatus.length !== 0) {
    const filterCourse: enrolledCoursesTypes[] = [];
    enrolledCourses?.map(course => {
      if (filterStatus.includes(EnrolledCoursesStatusEnum[course.status])) {
        if (filterName.length > 0) {
          if (filterName.includes(course.name)) {
            filterCourse.push(course);
          }
        } else {
          filterCourse.push(course);
        }
      }
    });
    setEnrolledCourses(filterCourse);
  } else {
    setEnrolledCourses(enrolledCourses);
  }
};
