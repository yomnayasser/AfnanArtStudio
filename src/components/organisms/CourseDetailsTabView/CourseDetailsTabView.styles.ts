import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.mx.xl,
    ...layouts.mb.xxl,
    ...layouts.flexed,
  },
  title: {...layouts.mt.xl},
  subHeader: {...layouts.mt.xl},
  note: {...layouts.my.sm},

  tabBar: {
    backgroundColor: 'transparent',
    ...layouts.py.sm,
  },
  indicatorStyle: {
    backgroundColor: getCurrentTheme().def.tabViewActiveColor,
  },
});
