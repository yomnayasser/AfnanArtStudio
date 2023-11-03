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
    backgroundColor: 'white',
    ...layouts.shadowProp2,
  },
  button: {
    ...layouts.py.md,
    marginVertical: spacing.xxl,
  },
});
