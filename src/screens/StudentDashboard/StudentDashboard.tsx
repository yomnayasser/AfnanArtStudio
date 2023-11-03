import {Pressable, Text, View} from '@wrappers/index';
import React, {useState} from 'react';
import styles from './StudentDashboard.styles';
import {
  Button,
  DashboardCard,
  Icon,
  ProgressCircle,
  ScreenHeader,
} from '@components/index';
import {useSelector} from 'react-redux';
import {RootState} from '@store/redux';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';
type Props = {};

const StudentDashboard = (props: Props) => {
  const navigation = useNavigation();
  const [showSessions, setShowSessions] = useState(false);
  const [showFees, setShowFees] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const course = user?.enrolledCourses[0];
  const finishedSessions = course?.enrollmentPeriod - course?.sessionsLeft;
  return (
    <View style={styles.container}>
      <Text largeSize style={styles.header}>
        {t('your_enrolled_course')}
      </Text>
      <View style={styles.cardContainer}>
        <Text xMediumSize medium>
          {course?.name} {t('course')}
        </Text>
        <ProgressCircle
          size={60}
          value={finishedSessions}
          total={course?.enrollmentPeriod}
          title={t('sessions')}
          style={styles.progressCircle}
        />

        <Text medium color={'@primaryText'}>
          {t('sessions')}{' '}
        </Text>

        <View style={styles.innerContainer}>
          <Text mediumSize>
            {t('total_sessions')} : {course?.enrollmentPeriod}
          </Text>
          <Text mediumSize>
            {t('sessions_taken')} : {finishedSessions}
          </Text>
          <Text mediumSize>
            {t('sessions_left')} : {course?.sessionsLeft}
          </Text>
        </View>

        <Text medium color={'@primaryText'}>
          important Dates
        </Text>

        <View style={styles.innerContainer}>
          <Text mediumSize>
            {t('startDate')} : {course?.startDate}
          </Text>
          <Text mediumSize>
            {t('expire_date')} : {course?.endDate}
          </Text>
        </View>
        <Text medium color={'@primaryText'}>
          {t('fees')}
        </Text>

        <View style={styles.innerContainer}>
          <Text mediumSize>
            {t('pending_fees')} : {course?.pendingFees} {t('egp')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StudentDashboard;
