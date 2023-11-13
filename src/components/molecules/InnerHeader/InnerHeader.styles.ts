import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    width: '100%',
    paddingTop: px(60),
    backgroundColor: '#e6e6e4',
    ...layouts.px.xl,
    ...layouts.pb.xxl,
  },
  icon: {
    ...layouts.me.md,
    ...layouts.mt.lg,
  },
  text: {
    ...layouts.mt.md,
  },
});
