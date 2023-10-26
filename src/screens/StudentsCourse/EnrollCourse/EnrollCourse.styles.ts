import {StyleSheet} from 'react-native';

import layouts, {spacing} from '@constants/styles/layouts';

export default StyleSheet.create({
  container: {
    ...layouts.mx.xl,
  },
  radioButton: {
    marginLeft: -170,
  },
  header: {
    ...layouts.my.xl,
  },
});
