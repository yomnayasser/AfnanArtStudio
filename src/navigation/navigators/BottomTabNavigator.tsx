import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabParamList} from '@navigation/models';
import {StudentProfile, StudentsDashboard} from '@screens/index';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="StudentsDashboard" component={StudentsDashboard} />
      <Tab.Screen name="Profile" component={StudentProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
