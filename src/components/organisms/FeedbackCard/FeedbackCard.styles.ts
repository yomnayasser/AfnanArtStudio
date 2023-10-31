import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.px.lg,
    ...layouts.py.xl,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  innerContainer: {
    ...layouts.ms.lg,
  },
  feedback: {
    width: '100%',
  },
  icon: {
    ...layouts.my.md,
    ...layouts.mx.xs,
  },
  iconContainer: {
    ...layouts.row,
  },
});
