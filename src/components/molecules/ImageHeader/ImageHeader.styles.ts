import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    ...layouts.ms.md,
    ...layouts.mt.xl,
  },
  titleContainer: {
    ...layouts.row,
  },
  subTitle: {
    ...layouts.ms.md,
  },
  icon: {
    marginTop: px(33),
  },
  innerContainer: {
    ...layouts.mx.md,
  },
  enroll: {
    marginStart: px(30),
    ...layouts.underlined,
  },
  row: {
    ...layouts.row,
  },
  textContainer: {
    ...layouts.ms.xl,
  },
});
