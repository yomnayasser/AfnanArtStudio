import {StyleSheet} from 'react-native';

import {px} from '@common/utils';
import {spacing, layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    // marginTop: spacing.xl + 50,
    // ...layouts.mx.xxl,
    ...layouts.flexed,
  },

  title: {...layouts.mt.xxxl},
  subHeader: {...layouts.mt.xl},

  note: {...layouts.my.sm},
  buttonContainer: {
    ...layouts.row,
    ...layouts.my.xxl,
  },
  button: {
    width: px(150),
    ...layouts.mx.md,
    ...layouts.mb.xl,
  },
});
