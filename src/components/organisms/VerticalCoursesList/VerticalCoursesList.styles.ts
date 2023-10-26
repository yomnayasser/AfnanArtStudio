import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    ...layouts.my.xl,
    borderWidth: 1,
    ...layouts.py.lg,
    ...layouts.px.md,
    borderRadius: 15,
    backgroundColor: '@cardBg',
    borderColor: '@cardBg',
    ...layouts.shadowProp,
  },
  row: {
    ...layouts.row,
  },
  header: {
    ...layouts.ms.lg,
    ...layouts.mt.xs,
  },
  subTitle: {
    ...layouts.ms.lg,
    ...layouts.mt.sm,
    width: px(150),
  },
  more: {...layouts.mt.xs},
  image: {
    width: 100,
    height: 100,
  },
  imageDisabled: {
    opacity: 0.2,
  },
});
