import React from 'react';
import {t} from 'i18next';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import {HorizontalCoursesList, Header, DashboardCard} from '@components/index';
import {AvailableCoursesScreen} from '@navigation/navigationTypes';
import {Text} from '@wrappers/index';
import {RootState} from '@store/redux';
import {useSelector} from 'react-redux';

const Home = () => {
  const navigation = useNavigation<AvailableCoursesScreen>();
  const user = useSelector((state: RootState) => state.userReducer.user);
  const headerOnPress = () => {
    navigation.navigate('AvailableCourses');
  };
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <Text largeSize semiBold style={styles.text}>
        {t('welcome')}, {user.firstName}
      </Text>
      <Header
        headerText={t('all_available_courses')}
        iconName="arrow-right-3"
        onPressHeader={() => {
          headerOnPress();
        }}
        style={styles.header}
      />
      <HorizontalCoursesList />

      <DashboardCard enrolledCourses={user?.enrolledCourses} />
    </ScrollView>
  );
};

export default Home;
