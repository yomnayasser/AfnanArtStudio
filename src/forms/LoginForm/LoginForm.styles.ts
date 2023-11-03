import {StyleSheet} from 'react-native';
import layouts from '@constants/styles/layouts';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {...layouts.allCentered, ...layouts.my.xxxl},
  inputContainer: {
    ...layouts.my.xl,
  },
  button: {
    ...layouts.mt.xxl,
    width: px(280),
  },
});
