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
        headerText={'Your Dashboard'}
        iconName="arrow-right-3"
        onPressHeader={() => {}}
        style={styles.header}
      />
      <View style={styles.innerContainer}>
        <ProgressCircle
          size={60}
          value={finishedSessions}
          total={course?.enrollmentPeriod}
          title={t('sessions')}
        />
        <Text medium xMediumSize center style={styles.text}>
          {course?.name + ' ' + 'Course'}
        </Text>
        <Text center>{finishedSessions + '/' + course?.enrollmentPeriod}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text smallSize>
            {t('startDate')}: <Text smallSize>{course?.startDate}</Text>
          </Text>

          <Text smallSize style={styles.pending}>
            {t('cashback')}:{' '}
            <Text smallSize>
              {course?.cashBack} {t('egp')}
            </Text>
          </Text>
        </View>
        <View>
          <Text smallSize color={'@errorText'}>
            {t('expire_date')}: <Text smallSize>{course?.startDate}</Text>
          </Text>

          <Text smallSize style={styles.pending} color={'@errorText'}>
            {t('remaining_fees')}:{' '}
            <Text smallSize color={'@errorText'}>
              {course?.pendingFees} {t('egp')}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardCard;
