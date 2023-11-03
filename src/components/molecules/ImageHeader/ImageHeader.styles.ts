import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    ...layouts.my.md,
  },

  icon: {
    ...layouts.mt.lg,
    ...layouts.me.sm,
  },
  innerContainer: {
    ...layouts.px.md,
    ...layouts.py.sm,
    ...layouts.row,
    ...layouts.justifyBetween,
    marginTop: px(50),
  },
  enroll: {
    marginStart: px(30),
    ...layouts.underlined,
  },
  row: {
    ...layouts.row,
  },
  iconContainer: {
    ...layouts.row,
    alignSelf: 'flex-end',
    ...layouts.mb.md,
  },
  actionIcons: {
    ...layouts.mx.md,
  },
});
