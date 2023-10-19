import {ScrollView, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {VerticalCoursesList, ScreenHeader} from '@components/index';
import styles from './AvailableCourses.styles';
import {CoursesFaker} from '@fakers/index';

type Props = {};

const AvailableCourses = (props: Props) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ScreenHeader
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
