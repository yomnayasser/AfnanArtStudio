import {IMAGES} from '@constants/assets';
import {useNavigation} from '@react-navigation/native';
import {Image, View} from '@wrappers/index';
import React, {useEffect} from 'react';

type Props = {};

const LandingPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Image
        source={IMAGES.Logo}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};

export default LandingPage;
