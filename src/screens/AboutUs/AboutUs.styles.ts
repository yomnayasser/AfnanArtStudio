import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.mx.xxl,
  },

  header: {
    ...layouts.my.xxl,
  },
  mapContainer: {
    ...layouts.mt.xl,
  },
  socials: {
    ...layouts.row,
    ...layouts.mb.xxxl,
    ...layouts.allCentered,
  },
  svg: {
    ...layouts.mx.xxl,
  },
});
