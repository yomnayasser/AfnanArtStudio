import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList, StudentStackParamList} from './models';
import {RouteProp} from '@react-navigation/native';

//MainNavigator
//stack
export type LoginScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Login'
>;

//StudentStackParamList
//stack
export type StudentsDashboardScreen = StackNavigationProp<
  StudentStackParamList,
  'StudentsDashboard'
>;
export type EnrollCourseScreen = StackNavigationProp<
  StudentStackParamList,
  'EnrollCourse'
>;
//route
export type StudentsDashboardScreenRouteProp = RouteProp<
  StudentStackParamList,
  'StudentsDashboard'
>;

export type CourseDetailsScreenRouteProp = RouteProp<
  StudentStackParamList,
  'CourseDetails'
>;
