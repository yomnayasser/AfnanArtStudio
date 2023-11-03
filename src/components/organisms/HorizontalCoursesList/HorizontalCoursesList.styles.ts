import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    flexWrap: 'wrap',
    ...layouts.shadowProp,
  },
  innerContainer: {
    ...layouts.mx.lg,
    ...layouts.my.sm,
  },
  imageContainer: {
    ...layouts.border,

    backgroundColor: '@textInputBg',
    borderColor: '@textInputBg',
    ...layouts.mx.md,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    ...layouts.mt.md,
  },
  imageDisabled: {
    opacity: 0.3,
  },
});
