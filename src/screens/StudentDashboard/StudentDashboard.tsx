import {t} from 'i18next';
import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

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

const StudentDashboard = () => {
  const navigation = useNavigation<AvailableCoursesScreen>();

  const user = useSelector((state: RootState) => state.userReducer.user);
  const enrolledCourses = user?.enrolledCourses;

  return (
    <>
      <ScreenHeader headerText={t('your_enrolled_courses')} />
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        <Filter />

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
            <Text center>{t('no_enrolled_courses')}</Text>
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
