import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AvailableCourses,
  CourseDetails,
  StudentProfile,
  StudentsDashboard,
} from '@screens/index';
import {StudentStackParamList} from '@navigation/models';

const StudentStack = createNativeStackNavigator<StudentStackParamList>();

const StudentNavigator = () => {
  return (
    <StudentStack.Navigator
      initialRouteName="StudentsDashboard"
      screenOptions={{headerShown: false}}>
      <StudentStack.Screen
        name="StudentsDashboard"
        component={StudentsDashboard}
      />
      <StudentStack.Screen name="StudentProfile" component={StudentProfile} />
      <StudentStack.Screen
        name="AvailableCourses"
        component={AvailableCourses}
      />
      <StudentStack.Screen name="CourseDetails" component={CourseDetails} />
    </StudentStack.Navigator>
  );
};

export default StudentNavigator;
