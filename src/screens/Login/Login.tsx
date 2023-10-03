import {t} from 'i18next';
import {I18nManager} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

import styles from './Login.styles';
import {LoginSheet} from '@sheets/index';
import {Button} from '@components/index';
import {Text, View} from '@wrappers/index';
import {ANIMATION} from '@constants/assets';

const Login = () => {
  const loginSheetRef = useRef<BottomSheet>(null);
  const [loginSheetIndex, setLoginSheetIndex] = useState(-1);
  console.log('I18nManager.isRTLsss', I18nManager.isRTL);
  return (
    <View style={styles.container}>
      <Text center largeSize color={'@darkText'}>
        {t('welcome')}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" style={styles.button} onPress={() => {}} />
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
