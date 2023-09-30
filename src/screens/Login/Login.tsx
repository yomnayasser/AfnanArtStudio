import {Button} from '@components/atoms';
import {Text, View} from '@wrappers/index';
import React from 'react';
import styles from './Login.styles';
import LottieView from 'lottie-react-native';
import {ANIMATION} from '@constants/assets';

type Props = {};

const Login = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text center largeSize color={'@darkText'}>
        Welcome!
      </Text>
      <Text center largeSize color={'@darkText'} style={{marginBottom: 10}}>
        Please select your role
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Instructor" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Student" />
      </View>
      <LottieView
        autoPlay
        loop
        source={ANIMATION.login4}
        style={styles.animation1}
      />
    </View>
  );
};

export default Login;
