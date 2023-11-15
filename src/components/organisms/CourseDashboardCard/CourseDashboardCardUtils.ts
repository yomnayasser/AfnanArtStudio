import {enrolledCoursesTypes} from '@common/types';
import {SheetManager} from 'react-native-actions-sheet';
import {boolean} from 'yup';

export const showBookSheet = (course: enrolledCoursesTypes) => {
  SheetManager.show('BookSessionSheet', {
    payload: {
      courseName: course.name,
      courseId: course.id,
    },
  });
};

export const getOpacity = (activeCourse: boolean) => {
  return {opacity: !activeCourse ? 0.5 : undefined};
};
