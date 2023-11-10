import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    flexWrap: 'wrap',
    ...layouts.shadowProp,
  },
  innerContainer: {
    ...layouts.mx.mlg,
    ...layouts.my.md,
  },
  imageContainer: {
    ...layouts.border,

    backgroundColor: '@textInputBg',
    borderColor: '@textInputBg',
    ...layouts.mx.md,
  },
  image: {
    width: 75,
    height: 75,
  },
  text: {
    ...layouts.mt.md,
  },
  imageDisabled: {
    opacity: 0.3,
  },
});
