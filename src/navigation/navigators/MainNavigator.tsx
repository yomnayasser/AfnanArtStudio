import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../models';
import {Login, LandingPage} from '@screens/index';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="LandingPage" component={LandingPage} />
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
};

export default Main;
