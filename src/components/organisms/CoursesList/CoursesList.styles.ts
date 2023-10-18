import {StyleSheet} from 'react-native';

import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    flexWrap: 'wrap',
  },
  innerContainer: {
    ...layouts.mx.lg,
    ...layouts.my.lg,
  },
  imageContainer: {
    ...layouts.border,

    backgroundColor: '@textInputBg',
    borderColor: '@textInputBg',
    ...layouts.mx.md,
  },
  image: {width: 80, height: 80},
  text: {...layouts.mt.md},
});
