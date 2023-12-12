import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  switchContainer: {
    ...layouts.row,
    ...layouts.my.md,
  },
  switchText: {
    width: 230,
  },
  switch: {
    ...layouts.mt.xs,
    ...layouts.me.xl,
  },
  innerCircleStyle: {
    ...layouts.allCentered,
  },
});
