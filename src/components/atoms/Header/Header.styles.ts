import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
  },
  icon: {
    ...layouts.mt.sm,
    ...layouts.mx.md,
  },
  badge: {
    borderRadius: 50,
    backgroundColor: getCurrentTheme().def.primaryPressedButtonBG,
    ...layouts.px.md,
  },
  row: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  badgeText: {
    ...layouts.py.xs,
    ...layouts.px.xs,
  },
});
