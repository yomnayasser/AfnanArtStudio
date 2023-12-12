import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';

import {
  AvatarImage,
  ActiveCoursesCard,
  Header,
  HorizontalSeparator,
  Switch,
  ProfilePersonalInfo,
} from '@components/index';
import {RootState} from '@store/redux';
import {Text} from '@wrappers/index';
import styles from './StudentProfile.styles';
import {t} from 'i18next';

const StudentProfile = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const activeCourses = user?.enrolledCourses.filter(
    course => course.status === 1,
  );
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [languageSwitch, setLanguageSwitch] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AvatarImage
        onPress={() => {
          SheetManager.show('EditPersonalInfoSheet');
        }}
        editMode={false}
      />

      <Text center medium xMediumSize>
        {user.firstName} {user.lastName}
      </Text>

      <Header
        headerText={'Personal Information'}
        style={styles.header}
        color={'@primaryText'}
      />

      <ProfilePersonalInfo
        editMode={false}
        styles={styles.personalInformation}
      />
      <HorizontalSeparator />

      <Header
        headerText={t('your_active_courses')}
        style={styles.headerTwo}
        color={'@primaryText'}
      />

      <ActiveCoursesCard courses={activeCourses} />

      <HorizontalSeparator style={styles.separator} />
      <Header
        headerText={t('settings')}
        style={styles.headerThree}
        color={'@primaryText'}
      />
      <Switch
        switchValue={themeSwitch}
        setSwitchValue={setThemeSwitch}
        switchText={t('change_to_dark_theme')}
      />
      <Switch
        switchValue={languageSwitch}
        setSwitchValue={setLanguageSwitch}
        switchText={t('change_language_to_arabic')}
      />
      <HorizontalSeparator />

      <Header
        headerText={t('logout')}
        style={styles.logout}
        iconName="logout4"
        iconPosition="Left"
        onPressHeader={() => {}}
      />
    </ScrollView>
  );
};

export default StudentProfile;
