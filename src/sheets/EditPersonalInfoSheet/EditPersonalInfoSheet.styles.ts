import {StyleSheet} from 'react-native';

import {px} from '@common/utils';
import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    height: '78%',
    ...layouts.px.xl,
    ...layouts.pt.xxxl,
  },
  button: {
    marginTop: px(30),
  },
  header: {
    ...layouts.my.xxl,
  },
});
