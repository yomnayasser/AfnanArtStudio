import {t} from 'i18next';
import React from 'react';
import styles from './VerticalCoursesList.styles';
import {useNavigation} from '@react-navigation/native';

import {IMAGES} from '@constants/assets';
import {TextButton} from '@components/index';
import {courseDetailsTypes} from '@common/types';
import {Image, Pressable, Text, View} from '@wrappers/index';
import {StudentsDashboardScreen} from '@navigation/navigationTypes';

type Props = {
  course: courseDetailsTypes;
};

const VerticalCoursesList = ({course}: Props) => {
  const navigation = useNavigation<StudentsDashboardScreen>();

  const checkDisabled = (disable: boolean) => {
    return disable ? styles.imageDisabled : null;
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        !course.disabled
          ? navigation.navigate('CourseDetails', {course: course})
          : () => {};
      }}>
      <View style={styles.row}>
        <Image
          source={IMAGES[course?.image]}
          style={[styles.image, checkDisabled(course?.disabled)]}
        />
        <View>
          <Text
            semiBold
            xMediumSize
            style={styles.header}
            color={course?.disabled ? '@backIcon' : '@darkText'}>
            {course?.name + ' ' + t('course')}
          </Text>
          <Text
            mediumSize
            style={styles.subTitle}
            color={course?.disabled ? '@backIcon' : '@darkText'}>
            {course?.experience}
          </Text>
          <TextButton
            text="More Details"
            style={styles.more}
            disabled={course?.disabled}
            course={course}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default VerticalCoursesList;
