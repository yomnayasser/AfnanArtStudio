import React, {useState} from 'react';
import {t} from 'i18next';
import {useSelector} from 'react-redux';
import {getCurrentTheme} from 'react-native-theming';

import {RootState} from '@store/redux';
import styles from './CourseDashboardCard.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {enrolledCoursesTypes} from '@common/types';
import {getOpacity, showBookSheet} from './CourseDashboardCardUtils';
import {Button, Icon, ProgressCircle, SessionReminder} from '@components/index';

type Props = {
  course: enrolledCoursesTypes;
};

const CourseDashboardCard = ({course}: Props) => {
  const [expandSession, setExpand] = useState(
    course.status === 1 ? true : false,
  );
  const user = useSelector((state: RootState) => state.userReducer.user);

  const enrolledCourses = user?.enrolledCourses;
  const reservedCourse = user?.reservedCourse;
  const theme = getCurrentTheme().def;
  const {errorText} = theme;

  const activeCourse = course.status === 1;
  const expiredCourse = course.status === -1;
  const isBookedBefore = reservedCourse.find(
    reserved => reserved.courseId === course.id,
  );
  const finishedSessions = course?.enrollmentPeriod - course?.sessionsLeft;
  return (
    <View style={[styles.cardContainer, getOpacity(activeCourse)]}>
      <View style={styles.dataContainer}>
        <Text xMediumSize medium>
          {course?.name} {t('course')}
        </Text>

        {!expandSession && !isBookedBefore && activeCourse ? (
          <Pressable
            onPress={() => {
              showBookSheet(course);
            }}>
            <Text medium color={'@primaryText'}>
              {t('book_session')}
            </Text>
          </Pressable>
        ) : (
          <>
            <Text medium color={expiredCourse ? '@errorText' : '@primaryText'}>
              {course.status === 0
                ? t('completed')
                : expiredCourse
                ? t('expired')
                : ''}
            </Text>
          </>
        )}
        {enrolledCourses?.length > 1 && (
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
        color={expiredCourse ? errorText : ''}
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
          {!isBookedBefore && activeCourse && (
            <Button
              title={t('book_session')}
              light
              onPress={() => {
                showBookSheet(course);
              }}
              style={styles.button}
            />
          )}
        </>
      )}
      {isBookedBefore && <SessionReminder />}
    </View>
  );
};

export default CourseDashboardCard;
