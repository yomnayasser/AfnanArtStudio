import React from 'react';
import {Button, RadioButton, ScreenHeader} from '@components/index';
import {useNavigation} from '@react-navigation/native';

import styles from './EnrollCourse.styles';
import {Text, View} from '@wrappers/index';
import {getRadioButtonData} from './EnrollCourseUtils';
import {CourseDetailsScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: CourseDetailsScreenRouteProp;
};

const EnrollCourse = ({route}: Props) => {
  const course = route?.params?.course;
  const navigation = useNavigation();

  return (
    <>
      <ScreenHeader
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text xxMediumSize semiBold style={styles.header}>
          Select Suitable Package:
        </Text>
        <View style={styles.radioButton}>
          <RadioButton radioButtonData={getRadioButtonData(course)} />
        </View>
      </View>
      <View style={styles.container}>
        <Text xxMediumSize semiBold style={styles.header}>
          How Would You Like To Pay:
        </Text>
        <View style={styles.radioButton}>
          <RadioButton radioButtonData={getRadioButtonData(course)} />
        </View>
        <Button title="Confirm" />
      </View>
    </>
  );
};

export default EnrollCourse;
