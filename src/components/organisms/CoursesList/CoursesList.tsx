import {Image, Text, TouchableOpacity, View} from '@wrappers/index';
import React from 'react';

import styles from './CoursesList.styles';
import {CoursesFaker} from '@fakers/index';
import {IMAGES} from '@constants/assets';
import {useNavigation} from '@react-navigation/native';
import {StudentsDashboardScreen} from '@navigation/navigationTypes';

const CoursesList = () => {
  const navigation = useNavigation<StudentsDashboardScreen>();
  return (
    <View style={styles.container}>
      {CoursesFaker.map(course => {
        const imagePath = course.image;
        return (
          <TouchableOpacity
            style={styles.innerContainer}
            onPress={() => {
              navigation.navigate('CourseDetails', {course: course});
            }}>
            <View style={styles.imageContainer}>
              <Image source={IMAGES[imagePath]} style={styles.image} />
            </View>
            <Text center style={styles.text}>
              {course.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CoursesList;
