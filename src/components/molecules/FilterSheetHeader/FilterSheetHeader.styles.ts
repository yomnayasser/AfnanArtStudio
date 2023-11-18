import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  filterHeader: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.my.xxl,
  },
  header: {
    width: 100,
  },
  icon: {
    ...layouts.mt.sm,
  },
  delete: {
    ...layouts.mt.xs,
  },
});
