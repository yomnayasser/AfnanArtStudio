import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  header: {
    // ...layouts.row,
    // ...layouts.wrapped,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {...layouts.ms.md, ...layouts.mt.xl},
  titleContainer: {...layouts.ms.lg},
  subTitle: {...layouts.ms.md, ...layouts.mt.xs},
});
