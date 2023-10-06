import {StyleSheet} from 'react-native';
import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {...layouts.allCentered, ...layouts.my.xxxl},
  inputContainer: {
    ...layouts.my.xl,
  },
  button: {
    ...layouts.mt.xxl,
  },
});
