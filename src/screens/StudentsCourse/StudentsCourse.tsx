/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';

import {
  StudentCourseContext,
  StudentCourseContextProvider,
} from '@store/contexts/StudentCourseContext';
import {View} from '@wrappers/index';
import {courseDetailsTypes} from '@common/types';
import styles from './StudentsCourseWrapper.styles';
import {CourseDetails, EnrollCourse} from '@screens/index';
import {StudentsCourseScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: StudentsCourseScreenRouteProp;
};

type studentCourseProp = {
  course: courseDetailsTypes;
};

const StudentsCourseWrapper = ({route}: Props) => {
  return (
    <StudentCourseContextProvider>
      <StudentsCourse course={route?.params?.course} />
    </StudentCourseContextProvider>
  );
};

const StudentsCourse = ({course}: studentCourseProp) => {
  const steps = {
    1: <CourseDetails />,
    2: <EnrollCourse />,
  };
  const {Value, setValue} = useContext(StudentCourseContext);
  useEffect(() => {
    setValue({...Value, course: course});
  }, [course]);
  return (
    <View style={styles.container}>
      {steps[Value.activeStep as keyof typeof steps]}
    </View>
  );
};

export default StudentsCourseWrapper;
