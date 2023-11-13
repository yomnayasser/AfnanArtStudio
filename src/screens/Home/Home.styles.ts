import {StyleSheet} from 'react-native';

import {spacing, layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    marginTop: spacing.xl + px(40),
    ...layouts.mx.xl,
  },
  header: {
    ...layouts.my.xxl,
  },
  text: {
    ...layouts.mt.xl,
  },
  aboutContainer: {
    ...layouts.mt.sm,
    ...layouts.mb.xxl,
    backgroundColor: 'white',
    ...layouts.px.xl,
    ...layouts.pb.xl,
    ...layouts.pt.md,
    borderRadius: 10,
  },
  aboutHeader: {
    ...layouts.my.xl,
  },
  aboutTitle: {
    ...layouts.my.xxl,
  },
});
