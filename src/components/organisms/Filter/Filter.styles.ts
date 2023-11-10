import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  filterIcon: {
    textAlign: 'right',
    ...layouts.mt.sm,
  },
  filterContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.my.xxl,
  },
  sortContainer: {
    borderColor: '@primaryText',
    backgroundColor: '@studentDashboardCardBg',
    borderWidth: 1,
    ...layouts.allCentered,
    ...layouts.px.xl,
    ...layouts.py.md,
    borderRadius: 5,
    ...layouts.row,
  },
  sortIcon: {
    ...layouts.ms.md,
  },
});
