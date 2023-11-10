import {t} from 'i18next';
import LottieView from 'lottie-react-native';
import React from 'react';

import styles from './Login.styles';
import {LoginForm} from '@forms/index';
import {Pressable, Text, View} from '@wrappers/index';
import {ANIMATION} from '@constants/assets';
import {SheetManager} from 'react-native-actions-sheet';

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
      <Pressable
        onPress={async () => {
          // await SheetManager.show('BookSessionSheet');
        }}>
        <Text center>
          {t('dont_have_account')} ?{' '}
          <Text color={'@primaryText'}>{t('sign_up')}</Text>
        </Text>
      </Pressable>

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
