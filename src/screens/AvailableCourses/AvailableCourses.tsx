import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CoursesFaker} from '@fakers/index';
import styles from './AvailableCourses.styles';
import {VerticalCoursesList, InnerHeader} from '@components/index';

const AvailableCourses = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <InnerHeader
        header={'Available Courses'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        {CoursesFaker.map(course => {
          return <VerticalCoursesList course={course} />;
        })}
      </View>
    </ScrollView>
  );
};

export default AvailableCourses;
