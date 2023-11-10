import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.mx.xl,
    ...layouts.flexed,
  },
  title: {...layouts.my.xl},
  subHeader: {...layouts.mt.xl},
  note: {...layouts.my.sm},

  tabBar: {
    backgroundColor: 'transparent',
    ...layouts.py.sm,
  },
  indicatorStyle: {
    backgroundColor: getCurrentTheme().def.tabViewActiveColor,
  },
  table: {
    ...layouts.mx.md,
  },
  block: {
    ...layouts.my.xl,
  },
});
