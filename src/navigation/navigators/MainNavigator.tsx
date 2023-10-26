import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackParamList} from '../models';
import {
  Login,
  LandingPage,
  AvailableCourses,
  StudentsCourse,
} from '@screens/index';
import BottomTabNavigator from './BottomTabNavigator';
import StudentCourseNavigator from './StudentCourseNavigator';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="LandingPage" component={LandingPage} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="AvailableCourses" component={AvailableCourses} />
      <MainStack.Screen name="StudentsCourse" component={StudentsCourse} />
    </MainStack.Navigator>
  );
};

export default Main;
