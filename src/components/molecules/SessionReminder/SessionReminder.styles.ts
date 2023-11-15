import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  upcomingSession: {
    width: 250,
  },
  row: {
    ...layouts.row,
    ...layouts.mt.xxl,
  },
  editIcon: {
    ...layouts.ms.md,
    ...layouts.mb.xl,
  },
  sessionBooking: {
    ...layouts.row,
    alignSelf: 'flex-end',
  },
  edit: {
    ...layouts.mx.xl,
  },
});
