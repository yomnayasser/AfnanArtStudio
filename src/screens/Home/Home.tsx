import React from 'react';
import {t} from 'i18next';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import {RootState} from '@store/redux';
import {Text, View} from '@wrappers/index';
import {ExhibitionFaker} from '@fakers/index';
import {AvailableCoursesScreen} from '@navigation/navigationTypes';
import {HorizontalCoursesList, Header, ImageCarousel} from '@components/index';

const Home = () => {
  const navigation = useNavigation<AvailableCoursesScreen>();
  const user = useSelector((state: RootState) => state.userReducer.user);
  const headerOnPress = () => {
    navigation.navigate('AvailableCourses');
  };

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Text largeSize semiBold style={styles.text}>
        {t('welcome')}, {user.firstName}.
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

      <Header
        headerText={'Find More About Us'}
        iconName="arrow-right-3"
        onPressHeader={() => {
          navigation.navigate('AboutUs');
        }}
        style={styles.header}
      />

      <View style={styles.aboutContainer}>
        <ImageCarousel data={ExhibitionFaker} />
        <Text xxMediumSize medium style={styles.aboutTitle}>
          {t('latest_exhibition')} :
        </Text>
        <Text>
          {t('about_the_exhibition1')}{' '}
          <Text color={'@primaryText'}>{t('exhibition_name')}</Text>{' '}
          {t('about_the_exhibition2')}
        </Text>
        <Text style={styles.aboutTitle}>{t('about_the_exhibition3')}</Text>
        <Text>{t('about_the_exhibition4')}</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
