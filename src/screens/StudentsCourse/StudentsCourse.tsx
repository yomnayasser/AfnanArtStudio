/* eslint-disable react-hooks/exhaustive-deps */
import React, {PropsWithChildren, useContext, useEffect} from 'react';
import {
  StudentCourseContext,
  StudentCourseContextProvider,
} from '@store/contexts/StudentCourseContext';
import {Text, View} from '@wrappers/index';
import CourseDetails from './CourseDetails/CourseDetails';
import EnrollCourse from './EnrollCourse/EnrollCourse';
import {CourseDetailsScreenRouteProp} from '@navigation/navigationTypes';
import styles from './StudentsCourseWrapper.styles';
type Props = {
  route: CourseDetailsScreenRouteProp;
};

const StudentsCourseWrapper = ({route}: Props) => {
  return (
    <StudentCourseContextProvider>
      <StudentsCourse course={route?.params.course} />
    </StudentCourseContextProvider>
  );
};

const steps = {
  1: <CourseDetails />,
  // 2: <EnrollCourse />,
};
const StudentsCourse = ({course}) => {
  const {Value, setValue} = useContext(StudentCourseContext);
  useEffect(() => {
    setValue({...Value, course: course});
  }, []);
  return (
    <View style={styles.container}>
      {steps[Value.activeStep as keyof typeof steps]}
    </View>
  );
};

export default StudentsCourseWrapper;
