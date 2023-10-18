import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  header: {
    ...layouts.row,
    ...layouts.wrapped,
  },
  image: {width: 130, height: 130},
  title: {...layouts.ms.xl, ...layouts.mt.xl},
  titleContainer: {...layouts.ms.lg, width: 200},
  subTitle: {...layouts.ms.xl, ...layouts.mt.xs},
});
