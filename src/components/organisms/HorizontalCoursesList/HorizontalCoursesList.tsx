import {Image, Text, TouchableOpacity, View} from '@wrappers/index';
import React from 'react';

import styles from './HorizontalCoursesList.styles';
import {CoursesFaker} from '@fakers/index';
import {IMAGES} from '@constants/assets';
import {useNavigation} from '@react-navigation/native';
import {StudentsCourseScreen} from '@navigation/navigationTypes';
import {boolean} from 'yup';

type Props = {
  fullList?: boolean;
};
const HorizontalCoursesList = ({fullList = true}: Props) => {
  const navigation = useNavigation<StudentsCourseScreen>();
  const checkDisabled = (disabled: boolean) => {
    return disabled ? styles.imageDisabled : null;
  };
  return (
    <View style={styles.container}>
      {CoursesFaker.map((course, index) => {
        const imagePath = course.image;
        return (
          <>
            {(fullList ? index < 6 : index < 3) && (
              <TouchableOpacity
                style={styles.innerContainer}
                onPress={() => {
                  navigation.navigate('StudentsCourse', {
                    course: course,
                  });
                }}>
                <View style={styles.imageContainer}>
                  <Image
                    source={IMAGES[imagePath]}
                    style={[styles.image, checkDisabled(course.disabled)]}
                  />
                </View>
                <Text
                  center
                  style={styles.text}
                  color={course?.disabled ? '@disabledText' : '@darkText'}>
                  {course.name}
                </Text>
              </TouchableOpacity>
            )}
          </>
        );
      })}
    </View>
  );
};

export default HorizontalCoursesList;
