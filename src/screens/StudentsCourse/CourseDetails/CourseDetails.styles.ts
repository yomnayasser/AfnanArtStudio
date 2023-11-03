import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {layouts, spacing} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.flexed,
  },
  headerContainer: {
    ...layouts.mb.sm,
  },
  buttonContainer: {
    ...layouts.allCentered,
    backgroundColor: getCurrentTheme().def.textInputBg,
    ...layouts.shadowProp2,
  },
  button: {
    ...layouts.mx.xl,
    ...layouts.py.md,
    marginVertical: spacing.xxl,
    width: '70%',
  },
});
