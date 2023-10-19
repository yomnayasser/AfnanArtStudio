import React from 'react';
import styles from './VerticalCoursesList.styles';

import {TextButton} from '@components/index';
import {Image, Text, View} from '@wrappers/index';
import {t} from 'i18next';
import {IMAGES} from '@constants/assets';
import {courseDetailsTypes} from '@common/types';

type Props = {
  course: courseDetailsTypes;
};

const VerticalCoursesList = ({course}: Props) => {
  const checkDisabled = (disable: boolean) => {
    return disable ? styles.imageDisabled : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={IMAGES[course?.imagePath]}
          style={[styles.image, checkDisabled(course?.disabled)]}
        />
        <View>
          <Text semiBold xMediumSize style={styles.header}>
            {course?.name + ' ' + t('course')}
          </Text>
          <Text mediumSize style={styles.subTitle}>
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
    </View>
  );
};

export default VerticalCoursesList;
