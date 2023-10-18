import React from 'react';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';

import {
  StudentsDashboardScreen,
  StudentsDashboardScreenRouteProp,
} from '@navigation/navigationTypes';
import {Text, View} from '@wrappers/index';
import styles from './StudentsDashboard.styles';
import {CoursesList, Header} from '@components/index';
import {layouts} from '@constants/styles';

type Props = {
  route: StudentsDashboardScreenRouteProp;
};

const StudentsDashboard = ({route}: Props) => {
  const navigation = useNavigation<StudentsDashboardScreen>();
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
      <CoursesList />
    </View>
  );
};

export default StudentsDashboard;
