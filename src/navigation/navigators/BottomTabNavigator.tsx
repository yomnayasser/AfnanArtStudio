/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Icon} from '@components/index';
import styles from './navigation.styles';
import {BottomTabParamList} from '@navigation/models';
import {StudentProfile, Home, StudentDashboard} from '@screens/index';
import {Text, TouchableOpacity, View} from '@wrappers/index';

const Tab = createBottomTabNavigator<BottomTabParamList>();
type iconsType = {
  [key: string]: string;
};
const icons: iconsType = {
  Home: 'home-14',
  MyCourses: 'color-palette',
  Profile: 'user4',
};
const MyTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{}}>
            <Icon
              name={icons[label.split(' ').join('') as string]}
              style={styles.icon}
              size={20}
              color={
                isFocused ? '@bottomTabActiveIcon' : '@bottomTabInActiveIcon'
              }
            />
            <Text
              medium={isFocused}
              smallSize
              color={
                isFocused ? '@bottomTabActiveIcon' : '@bottomTabInActiveIcon'
              }
              style={styles.bottomTabText}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Courses" component={StudentDashboard} />
      <Tab.Screen name="Profile" component={StudentProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
