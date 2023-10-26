import React from 'react';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';

import {View} from '@wrappers/index';
import styles from './StudentsDashboard.styles';
import {HorizontalCoursesList, Header} from '@components/index';
import {AvailableCoursesScreen} from '@navigation/navigationTypes';

const StudentsDashboard = () => {
  const navigation = useNavigation<AvailableCoursesScreen>();
  const headerOnPress = () => {
    navigation.navigate('AvailableCourses');
  };
  return (
    <View style={styles.container}>
      <Header
        headerText={t('all_available_courses')}
        iconName="arrow-right-3"
        onPressHeader={() => {
          headerOnPress();
        }}
        style={styles.header}
      />
      <HorizontalCoursesList />
    </View>
  );
};

export default StudentsDashboard;
