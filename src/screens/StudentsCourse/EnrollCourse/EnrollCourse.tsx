import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './EnrollCourse.styles';
import {Text, View} from '@wrappers/index';
import {StudentCourseContext} from '@store/index';
import {getRadioButtonData} from './EnrollCourseUtils';
import {Button, RadioButton, ScreenHeader} from '@components/index';

const EnrollCourse = () => {
  const {Value} = useContext(StudentCourseContext);

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
          <RadioButton radioButtonData={getRadioButtonData(Value?.course)} />
        </View>
      </View>
      <View style={styles.container}>
        <Text xxMediumSize semiBold style={styles.header}>
          How Would You Like To Pay:
        </Text>
        <View style={styles.radioButton}>
          <RadioButton radioButtonData={getRadioButtonData(Value?.course)} />
        </View>
        <Button title="Confirm" />
      </View>
    </>
  );
};

export default EnrollCourse;
