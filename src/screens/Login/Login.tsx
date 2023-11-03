import {t} from 'i18next';
import LottieView from 'lottie-react-native';
import React from 'react';

import styles from './Login.styles';
import {LoginForm} from '@forms/index';
import {Text, View} from '@wrappers/index';
import {ANIMATION} from '@constants/assets';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text largeSize center color={'@darkText'}>
        {t('welcome_to')}
      </Text>
      <Text largeSize center medium color={'@darkText'}>
        {t('afnan_art_studio')} !
      </Text>
      <LoginForm />
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
