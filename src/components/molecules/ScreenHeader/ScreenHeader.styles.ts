import {StyleSheet} from 'react-native';

import {layouts, spacing} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    // ...layouts.row,
    // backgroundColor: '#FFEADD',
    width: '100%',
    marginTop: px(50),
    ...layouts.pt.xl,
    ...layouts.ps.xl,
    // borderBottomWidth: 1,
    // borderBottomColor: '#FF6666',
  },
  icon: {
    marginTop: spacing.sm + 2,
    ...layouts.me.xs,
  },
});
