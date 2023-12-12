/* eslint-disable react-hooks/exhaustive-deps */
import {t} from 'i18next';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';

import {
  CourseDashboardCard,
  Filter,
  Header,
  HorizontalCoursesList,
} from '@components/index';
import {RootState} from '@store/redux';
import {ANIMATION} from '@constants/assets';
import styles from './StudentDashboard.styles';
import {ScreenHeader} from '@components/index';
import {Pressable, Text, View} from '@wrappers/index';
import {AvailableCoursesScreen} from '@navigation/navigationTypes';
import {getEnrolledCoursesData} from './StudentDashboardUtils';

const StudentDashboard = () => {
  const navigation = useNavigation<AvailableCoursesScreen>();

  const user = useSelector((state: RootState) => state.userReducer.user);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState(user?.enrolledCourses);
  useEffect(() => {
    getEnrolledCoursesData(
      filterName,
      user?.enrolledCourses,
      filterStatus,
      setEnrolledCourses,
    );
  }, [filterName, filterStatus]);

  return (
    <>
      <ScreenHeader headerText={t('your_enrolled_courses')} />
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        <Filter
          onPressFilter={() => {
            SheetManager.show('EnrolledCoursesFilterSheet', {
              payload: {
                setFilterStatus: setFilterStatus,
                setFilterName: setFilterName,
              },
            });
          }}
          onPressSort={() => {
            // SheetManager.show('EnrolledCoursesSortSheet');
          }}
        />
        {enrolledCourses.length > 0 ? (
          enrolledCourses?.map(course => {
            return <CourseDashboardCard course={course} />;
          })
        ) : (
          <View style={styles.animationContainer}>
            <AnimatedLottieView
              autoPlay
              loop
              source={ANIMATION.login4}
              style={styles.animation}
            />
            <Text center>
              {filterName.length === 0
                ? t('no_enrolled_courses')
                : filterName.length === 1
                ? `${t('you_are_not_enrolled_in')} ${filterName[0]} ${t(
                    'course',
                  )}`
                : t('you_are_not_enrolled_in_these_courses')}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('AvailableCourses');
              }}>
              <Text center color={'@primaryText'}>
                {t('check_courses')}
              </Text>
            </Pressable>
          </View>
        )}
        <Header headerText={t('suggested_courses')} style={styles.header} />
        <HorizontalCoursesList fullList={false} />
      </ScrollView>
    </>
  );
};

export default StudentDashboard;
