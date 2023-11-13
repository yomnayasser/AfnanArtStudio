import React from 'react';
import {t} from 'i18next';
import {SheetManager} from 'react-native-actions-sheet';

import styles from './CourseDashboardCard.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {Button, Icon, ProgressCircle} from '@components/index';
import {useSelector} from 'react-redux';
import {RootState} from '@store/redux';

type Props = {
  expandSession: boolean;
  setExpand: Function;
  course: any;
};

const CourseDashboardCard = ({expandSession, course, setExpand}: Props) => {
  const finishedSessions = course?.enrollmentPeriod - course?.sessionsLeft;
  const user = useSelector((state: RootState) => state.userReducer.user);

  const showBookSheet = () => {
    SheetManager.show('BookSessionSheet', {
      payload: {
        courseName: course.name,
      },
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.dataContainer}>
        <Text xMediumSize medium>
          {course?.name} {t('course')}
        </Text>
        {!expandSession && (
          <Pressable
            onPress={() => {
              showBookSheet();
            }}>
            <Text medium color={'@primaryText'}>
              {t('book_session')}
            </Text>
          </Pressable>
        )}
        {course?.enrolledCourses?.length > 1 && course?.status !== 1 && (
          <Pressable
            onPress={() => {
              setExpand(!expandSession);
            }}>
            <Icon name={!expandSession ? 'arrow-down-1' : 'arrow-up-2'} />
          </Pressable>
        )}
      </View>
      <ProgressCircle
        size={55}
        value={finishedSessions}
        total={course?.enrollmentPeriod}
        title={t('sessions')}
        style={styles.progressCircle}
      />
      {expandSession && (
        <>
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
            {t('important_dates')}
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
          {user.reservedCourse.length === 0 && (
            <Button
              title={t('book_session')}
              light
              onPress={() => {
                showBookSheet();
              }}
              style={styles.button}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CourseDashboardCard;
