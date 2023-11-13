import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CoursesFaker} from '@fakers/index';
import styles from './AvailableCourses.styles';
import {VerticalCoursesList, InnerHeader, Filter} from '@components/index';

const AvailableCourses = () => {
  const navigation = useNavigation();
  return (
    <>
      <InnerHeader
        header={'Available Courses'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Filter />
          {CoursesFaker.map(course => {
            return <VerticalCoursesList course={course} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default AvailableCourses;
