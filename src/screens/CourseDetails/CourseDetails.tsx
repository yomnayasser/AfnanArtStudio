import {t} from 'i18next';
import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, View} from '@wrappers/index';
import {IMAGES} from '@constants/assets';
import styles from './CourseDetails.styles';
import {Button, Header, ImageHeader, List, Table} from '@components/index';
import {CourseDetailsScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: CourseDetailsScreenRouteProp;
};

const CourseDetails = ({route}: Props) => {
  const course = route?.params?.course;
  const imagePath = course?.image;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <ImageHeader
        title={course.name + ' ' + t('course')}
        subTitle={course.experience}
        image={IMAGES[imagePath]}
      />
      <Header headerText={t('what_to_expect')} style={styles.title} />

      <List number listData={course.outcomes} />

      <Header headerText=" Course Packages:" style={styles.title} />
      <Table
        tableData={course.packagesPrices}
        tableHead={course.packagesName}
      />

      <Text mediumSize style={styles.note}>
        {course.sessionDuration + ' ' + t('hours_per_session')}
      </Text>

      {course.notes.length > 0 && (
        <>
          <Text style={styles.subHeader}>{t('notes')}</Text>
          <List listData={course.notes} />
        </>
      )}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="enroll" onPress={() => {}} />
        <Button
          style={styles.button}
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default CourseDetails;
