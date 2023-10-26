import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    ...layouts.ms.md,
    ...layouts.mt.xl,
  },
  titleContainer: {
    ...layouts.ms.lg,
    ...layouts.row,
  },
  subTitle: {
    ...layouts.ms.md,
  },
  icon: {
    marginTop: px(30),
    ...layouts.mx.sm,
  },
});
