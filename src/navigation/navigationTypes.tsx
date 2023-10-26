import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from './models';

//MainNavigator
//stack
export type LoginScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Login'
>;
export type AvailableCoursesScreen = StackNavigationProp<
  MainStackParamList,
  'AvailableCourses'
>;

//route
export type StudentsCourseScreenRouteProp = RouteProp<
  MainStackParamList,
  'StudentsCourse'
>;
