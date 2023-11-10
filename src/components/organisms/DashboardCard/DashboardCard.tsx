import {t} from 'i18next';
import React from 'react';

import {Text, View} from '@wrappers/index';
import styles from './DashboardCard.styles';
import {enrolledCourses} from '@common/types';
import {Header, ProgressCircle} from '@components/index';

type Props = {
  enrolledCourses: enrolledCourses[];
};

// eslint-disable-next-line @typescript-eslint/no-shadow
const DashboardCard = ({enrolledCourses}: Props) => {
  const course = enrolledCourses[0];
  const finishedSessions = course?.enrollmentPeriod - course?.sessionsLeft;

  return (
    <View style={styles.container}>
      <Header
        headerText={t('your_enrolled_course')}
        onPressHeader={() => {}}
        style={styles.header}
        badge={enrolledCourses?.length}
      />
      <View style={styles.innerContainer}>
        <ProgressCircle
          size={55}
          value={finishedSessions}
          total={course?.enrollmentPeriod}
          title={t('sessions')}
        />
        <Text medium xMediumSize center style={styles.text}>
          {course?.name + ' ' + t('course')}
        </Text>
        <Text center>{finishedSessions + '/' + course?.enrollmentPeriod}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text smallSize>
            {t('startDate')} : {course?.startDate}
          </Text>

          <Text smallSize style={styles.pending}>
            {t('wallet')} : {course?.cashBack} {t('egp')}
          </Text>
        </View>
        <View>
          <Text smallSize color={'@errorText'}>
            {t('expire_date')} : {course?.startDate}
          </Text>

          <Text smallSize style={styles.pending} color={'@errorText'}>
            {t('remaining_fees')} : {course?.pendingFees} {t('egp')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardCard;
