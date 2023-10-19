import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.ms.md,
  },
  icon: {
    ...layouts.mt.sm,
    ...layouts.ms.sm,
  },
});
