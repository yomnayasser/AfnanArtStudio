import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabParamList} from '@navigation/models';
import {StudentProfile, Home} from '@screens/index';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={StudentProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
