import {StyleSheet} from 'react-native';

import {spacing, layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    marginTop: spacing.xl + px(40),
    ...layouts.mx.xl,
  },
  header: {
    ...layouts.my.md,
  },
  text: {
    ...layouts.my.xl,
  },
});
