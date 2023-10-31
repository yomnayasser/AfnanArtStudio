import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.mx.xl,
    ...layouts.flexed,
  },
  title: {...layouts.mt.xxxl},
  subHeader: {...layouts.mt.xl},
  note: {...layouts.my.sm},
  button: {
    ...layouts.allCentered,
    ...layouts.mx.md,
    ...layouts.mt.xl,
    ...layouts.mb.xxxl,
  },
  tabBar: {
    backgroundColor: 'transparent',
    ...layouts.py.sm,
  },
  indicatorStyle: {
    backgroundColor: getCurrentTheme().def.tabViewActiveColor,
  },
});
