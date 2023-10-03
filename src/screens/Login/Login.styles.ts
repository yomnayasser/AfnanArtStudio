import layouts from '@constants/styles/layouts';
import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...layouts.flexed,
    backgroundColor: '@background',
    paddingTop: Platform.OS === 'ios' ? '50%' : '20%',
    ...layouts.px.xl,
  },
  buttonContainer: {
    ...layouts.allCentered,
    ...layouts.mt.xxl,
  },
  button: {
    ...layouts.my.xxxl,
  },
  animation1: {
    position: 'absolute',
    height: 280,
    right: -25,
    bottom: 0,
  },
});
