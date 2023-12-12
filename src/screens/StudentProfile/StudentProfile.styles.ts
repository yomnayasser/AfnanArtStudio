import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    marginTop: px(80),
    ...layouts.mx.xl,
  },
  header: {
    ...layouts.mt.xxxl,
    ...layouts.mb.md,
  },

  personalInformation: {},
  headerThree: {
    ...layouts.my.md,
  },

  separator: {
    ...layouts.mt.xxxl,
  },

  headerTwo: {
    ...layouts.mb.xl,
    ...layouts.mt.md,
  },
  logout: {
    ...layouts.mb.xl,
    ...layouts.mt.md,
  },
});
