import React from 'react';
import {t} from 'i18next';

import {Pressable, Text, View} from '@wrappers/index';
import styles from './ActiveCoursesCard.styles';
import {enrolledCoursesTypes} from '@common/types';

type Props = {
  courses: enrolledCoursesTypes[];
};

const ActiveCoursesCard = ({courses}: Props) => {
  return (
    <>
      {courses?.map((course, index) => {
        return (
          <Pressable
            style={[
              styles.enrolledCourses,
              index === courses.length - 1 ? styles.lastIndex : {},
            ]}>
            <Text style={styles.index} color={'@primaryText'}>
              {index < 10 ? 0 : ''}
              {index + 1}
            </Text>
            <View style={styles.horizontalSeparator} />
            <View>
              <Text medium>
                {course.name} {t('course')}
              </Text>
              <Text smallSize style={styles.expireDate}>
                {t('expire_date')}: {course.endDate}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </>
  );
};

export default ActiveCoursesCard;
