import {StyleSheet} from 'react-native';

import {spacing, layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  progressCircle: {
    ...layouts.allCentered,
    ...layouts.mt.xl,
  },
  cardContainer: {
    backgroundColor: '#e6e6e4',
    borderRadius: 20,
    ...layouts.px.xl,
    ...layouts.py.xxl,
    ...layouts.my.xl,
  },
  dataContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  row: {
    ...layouts.row,
  },
  arrowIcon: {
    ...layouts.ms.sm,
  },

  innerContainer: {
    ...layouts.my.md,
    ...layouts.ms.xl,
  },
  historyButton: {
    backgroundColor: 'white',
    ...layouts.px.md,
    paddingVertical: spacing.sm + px(3),
    borderRadius: 10,
  },
  button: {
    ...layouts.my.md,
  },
});
