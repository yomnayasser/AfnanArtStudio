/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {IMAGES} from '@constants/assets';
import styles from './LandingPage.styles';
import {Image, View} from '@wrappers/index';
import {LoginScreenNavigationProp} from '@navigation/navigationTypes';

const LandingPage = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={IMAGES.Logo} style={styles.image} />
    </View>
  );
};

export default LandingPage;
