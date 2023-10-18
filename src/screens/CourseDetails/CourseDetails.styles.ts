import {StyleSheet} from 'react-native';

import layouts, {spacing} from '@constants/styles/layouts';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    marginTop: spacing.xl + 50,
    ...layouts.mx.xl,
  },

  title: {...layouts.mt.xxxl},
  subHeader: {...layouts.mt.xl},

  note: {...layouts.my.sm},
  buttonContainer: {
    justifyContent: 'space-around',
    ...layouts.row,
    ...layouts.my.xxl,
  },
  button: {width: px(150)},
});
