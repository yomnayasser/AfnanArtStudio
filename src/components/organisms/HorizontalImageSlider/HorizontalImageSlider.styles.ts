import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {},
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    ...layouts.me.xxl,
  },
  text: {
    ...layouts.my.md,
  },
});
