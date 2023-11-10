import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  innerContainer: {
    ...layouts.pb.xxl,
    ...layouts.mx.xl,
  },
  header: {
    ...layouts.my.xl,
  },
  animation: {
    height: 280,
  },
  animationContainer: {
    ...layouts.my.xxxl,
  },
  upcomingSession: {
    ...layouts.mb.xl,
    width: 300,
  },
  reminder: {
    ...layouts.row,
  },
  editIcon: {
    ...layouts.ms.md,
  },
});
