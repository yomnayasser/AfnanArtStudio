import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
  },
  icon: {
    ...layouts.mt.sm,
    ...layouts.mx.md,
  },
});
