import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  enrolledCourses: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.px.xl,
    ...layouts.py.xl,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  horizontalSeparator: {
    borderRightWidth: 1,
    borderRightColor: '#95AAC2',
    ...layouts.mx.xl,
  },
  index: {
    ...layouts.selfCenter,
  },
  expireDate: {
    ...layouts.mt.sm,
  },
  lastIndex: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
