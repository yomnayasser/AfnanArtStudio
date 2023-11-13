import layouts from '@constants/styles/layouts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    ...layouts.py.xl,
    ...layouts.px.xxl,
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    ...layouts.my.xxl,
  },
  close: {
    textAlign: 'right',
  },
});
