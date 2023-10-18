import {StyleSheet} from 'react-native';

import layouts, {spacing} from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    marginTop: spacing.xl + 50,
    ...layouts.mx.xl,
  },
  header: {
    ...layouts.my.xl,
  },
});
