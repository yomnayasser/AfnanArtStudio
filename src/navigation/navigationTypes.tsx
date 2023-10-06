import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from './models';
import {RouteProp} from '@react-navigation/native';

//MainNavigator
//stack
export type LoginScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Login'
>;
//route
export type StudentsDashboardScreenRouteProp = RouteProp<
  MainStackParamList,
  'StudentsDashboard'
>;
