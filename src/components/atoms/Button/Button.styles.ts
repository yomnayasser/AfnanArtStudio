import layouts from '@constants/styles/layouts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: 250,
    ...layouts.selfCenter,
    ...layouts.halfRounded,
    backgroundColor: '@primaryButton',
  },
  text: {...layouts.my.xxl, ...layouts.halfRounded},
});
