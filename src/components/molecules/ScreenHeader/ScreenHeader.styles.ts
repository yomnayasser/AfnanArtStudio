import {StyleSheet} from 'react-native';

import {layouts, spacing} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    width: '100%',
    marginTop: px(50),
    ...layouts.pt.xl,
    ...layouts.ps.xl,
  },
  icon: {
    marginTop: spacing.sm + 2,
    ...layouts.me.md,
  },
  text: {
    ...layouts.mt.sm,
  },
});
